import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import DuaCard from "../components/DuaCard";
import HighlightedText from "../components/HighlightedText";
import Input from "../components/Input";
import LayoutWithNavbar from "../components/LayoutWithNavbar";
import NavbarTitle from "../components/NavbarTitle";
import { getDuas } from "../services/duas";
import { Dua } from "../types";

interface DuasPageProps {
  duas: Dua[];
}

const DuasPage: NextPage<DuasPageProps> = ({ duas }) => {
  const [keyword, setKeyword] = useState<string>("");
  const [searchRegex, setSearchRegex] = useState<RegExp | null>(null);
  const [filteredDuas, setFilteredSurah] = useState<Dua[]>(duas);
  useEffect(() => {
    setSearchRegex(keyword ? new RegExp(keyword, "gi") : null);
  }, [keyword]);

  useEffect(() => {
    setFilteredSurah(
      searchRegex ? duas.filter((dua) => dua.name.match(searchRegex)) : duas
    );
  }, [searchRegex, duas]);

  return (
    <LayoutWithNavbar
      navbarTitle={<NavbarTitle title="Kumpulan Doa" icon="/icon-pray.svg" />}
      leftButton={
        <Link href="/">
          <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer" />
        </Link>
      }
      // rightButton={
      //   <span
      //     onClick={() =>
      //       dispatch({ type: "set_show_modal_info", show: !showModalInfo })
      //     }
      //   >
      //     <FontAwesomeIcon icon={faInfoCircle} className="cursor-pointer" />
      //   </span>
      // }
    >
      <Head>
        <title>Al-Ihsan Apps &mdash; Kumpulan Doa</title>
      </Head>
      <div className="mt-3">
        <Input
          value={keyword}
          onChange={(e) => setKeyword((e.target as HTMLInputElement).value)}
          className="w-full"
          placeholder="Cari doa ..."
          rightIcon={<FontAwesomeIcon icon={faSearch} />}
        />
      </div>
      <div className="mt-3">
        {filteredDuas.map((dua, i) => (
          <div className={i > 0 && "mt-3"}>
            <DuaCard
              name={<HighlightedText text={dua.name} regex={searchRegex}/>}
              arabic={dua.arabic}
              transliteration={dua.transliteration}
              translation={dua.translation}
            />
          </div>
        ))}
      </div>
    </LayoutWithNavbar>
  );
};

export default DuasPage;

export const getStaticProps: GetStaticProps<DuasPageProps> = async () => {
  const duas = await getDuas();
  return {
    props: {
      duas,
    },
  };
};