"use client";
import React from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { WorkSection } from "@/components/workPage/workSection";

const projectsData = [
  {
    title: (
      <>
        Kurumsal & Reklam
        <br />
        Web Sitesi
      </>
    ),
    description: "İçerik Yönetim Sistemi",
    link: "https://www.yieldstone.ai/",
    imageLink: "/kurumsal.png",
  },
  {
    title: (
      <>
        E-Ticaret
        <br /> Çözümleri
      </>
    ),
    description: "Size Özel E-Ticaret Sitesi",
    link: "https://www.figma.com/community/plugin/1380643582596908985/simple-font-replacer",
    imageLink: "/eticaret.png",
  },
  {
    title: (
      <>
        Özel <br /> Yazılım
      </>
    ),
    description: "Size Özel Yazılım Çözümleri",
    link: "https://generator.andytoken.com/",
    imageLink: "/özelyazılım.png",
  },
  {
    title: (
      <>
        Mobil & Uygulama <br /> Geliştirme
      </>
    ),
    description: "Mobil Uygulama Geliştirme",
    link: "https://ponkecoin-ninetyeight.webflow.io/",
    imageLink: "/mobil.png",
  },

  {
    title: (
      <>
        Veri & Web <br /> Robotları
      </>
    ),
    description: "Veri Toplama ve Web Robotları",
    link: "https://amanfx.webflow.io/",
    imageLink: "/robot.png",
  },
  {
    title: (
      <>
        Yapaz Zeka <br /> Çözümleri
      </>
    ),
    description: "Yapay Zeka Destekli Çözümler",
    link: "https://www.figma.com/proto/Tzz9bwrjHtSza87b1l3D0i/Inner-Strength-UI-Design?type=design&node-id=37-10&t=pq2KDLjYbMU4LFgA-1&scaling=min-zoom&page-id=0%3A1&mode=design",
    imageLink: "/yapay.png",
  },
  {
    title: (
      <>
        Otomasyon <br /> Çözümleri
      </>
    ),
    description: "Otomasyon Çözümleri",
    link: "https://www.figma.com/proto/Tzz9bwrjHtSza87b1l3D0i/Inner-Strength-UI-Design?type=design&node-id=37-10&t=pq2KDLjYbMU4LFgA-1&scaling=min-zoom&page-id=0%3A1&mode=design",
    imageLink: "/otomasyon.png",
  },
];
//test
export default function WorkPage() {
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <FullpageProviderWork>
        <div id="fullpage">
          <div className="background">
            Hizmetlerimiz
            <br />
            Hizmetlerimiz
          </div>

          {projectsData.map((item, index) => (
            <WorkSection
              key={index}
              item={item}
              index={index}
              length={projectsData.length}
              color={index % 2 !== 0 ? "Light" : "Dark"}
            />
          ))}
        </div>
      </FullpageProviderWork>
    </>
  );
}
