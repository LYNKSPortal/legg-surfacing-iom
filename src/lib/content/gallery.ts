export type GalleryCategory =
  | "Tarmac"
  | "Resin Bound"
  | "Roads & Lanes"
  | "Micro Asphalt"
  | "Groundworks";

export const galleryCategories: GalleryCategory[] = [
  "Tarmac",
  "Resin Bound",
  "Roads & Lanes",
  "Micro Asphalt",
  "Groundworks",
];

export type GalleryImage = {
  id: string;
  category: GalleryCategory;
  image: string;
  imageAlt: string;
};

/**
 * A simple, growing photo gallery. Add new images here as they become
 * available — no project names, locations or write-ups required, just
 * a photo and the category it belongs to.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: "tarmac-driveway-1",
    category: "Tarmac",
    image: "/tarmac-driveways.png",
    imageAlt: "Freshly laid tarmac driveway at a residential property",
  },
  {
    id: "commercial-car-park-1",
    category: "Tarmac",
    image: "/commercial-car-park.jpg",
    imageAlt: "Aerial view of a resurfaced and line-marked commercial car park",
  },
  {
    id: "road-lane-1",
    category: "Roads & Lanes",
    image: "/road-lane-surfacing.png",
    imageAlt: "Newly surfaced private access lane",
  },
  {
    id: "resin-bound-1",
    category: "Resin Bound",
    image: "/resin-bound-surfacing.png",
    imageAlt: "Resin bound driveway installed at a residential property",
  },
  {
    id: "micro-asphalt-1",
    category: "Micro Asphalt",
    image: "/micro-asphalt.png",
    imageAlt: "Micro asphalt surface treatment applied to an access road",
  },
  {
    id: "groundworks-1",
    category: "Groundworks",
    image: "/groundworks.png",
    imageAlt: "Excavation and groundwork in progress ahead of surfacing",
  },
  // Additional photos sourced from LEGG Surfacing's Facebook page.
  {
    id: "resin-bound-gallery-1",
    category: "Resin Bound",
    image: "/gallery/686211051_1551599466974465_477455351438297481_n.jpg",
    imageAlt: "Resin bound patio installed beneath a balcony",
  },
  {
    id: "resin-bound-gallery-2",
    category: "Resin Bound",
    image: "/gallery/686527493_1551599436974468_6601576006654918146_n.jpg",
    imageAlt: "Resin bound patio area at a residential property",
  },
  {
    id: "tarmac-gallery-1",
    category: "Tarmac",
    image: "/gallery/686924475_1552459020221843_1531136810354040087_n.jpg",
    imageAlt: "Tarmac driveway leading to a white cottage",
  },
  {
    id: "tarmac-gallery-2",
    category: "Tarmac",
    image: "/gallery/687065433_1553399173461161_8668424976482873946_n.jpg",
    imageAlt: "Compacting a tarmac driveway during installation",
  },
  {
    id: "resin-bound-gallery-3",
    category: "Resin Bound",
    image: "/gallery/687401359_1552458950221850_3157810541988103508_n.jpg",
    imageAlt: "Resin bound pathway beside a white property",
  },
  {
    id: "resin-bound-gallery-4",
    category: "Resin Bound",
    image: "/gallery/687683937_1552458360221909_6594246260691449581_n.jpg",
    imageAlt: "Resin bound driveway at a cottage property",
  },
  {
    id: "resin-bound-gallery-5",
    category: "Resin Bound",
    image: "/gallery/687694745_1552458900221855_8734538153786938335_n.jpg",
    imageAlt: "Resin bound pathway leading to a cottage entrance",
  },
  {
    id: "resin-bound-gallery-6",
    category: "Resin Bound",
    image: "/gallery/687756200_1552458573555221_1895096278837771708_n.jpg",
    imageAlt: "Resin bound driveway leading to garages",
  },
  {
    id: "tarmac-gallery-3",
    category: "Tarmac",
    image: "/gallery/688381647_1557918033009275_7597265160704442586_n.jpg",
    imageAlt: "Tarmac driveway leading to a garage",
  },
  {
    id: "resin-bound-gallery-7",
    category: "Resin Bound",
    image: "/gallery/688465240_1552458756888536_8732729299335748863_n.jpg",
    imageAlt: "Resin bound driveway at a residential property",
  },
  {
    id: "resin-bound-gallery-8",
    category: "Resin Bound",
    image: "/gallery/688563935_1556223766512035_5991141424889133263_n.jpg",
    imageAlt: "Resin bound patio area beside a brick property",
  },
  {
    id: "resin-bound-gallery-9",
    category: "Resin Bound",
    image: "/gallery/688736547_1551599380307807_473103368389476475_n.jpg",
    imageAlt: "Resin bound patio edge detail",
  },
  {
    id: "resin-bound-gallery-10",
    category: "Resin Bound",
    image: "/gallery/688740314_1554291820038563_4217299450706373818_n.jpg",
    imageAlt: "Resin bound patio with a decorative Manx emblem inlay",
  },
  {
    id: "resin-bound-gallery-11",
    category: "Resin Bound",
    image: "/gallery/688848087_1551599586974453_8512519444471809203_n.jpg",
    imageAlt: "Resin bound steps leading to a patio area",
  },
  {
    id: "tarmac-gallery-4",
    category: "Tarmac",
    image: "/gallery/688926429_1555224059945339_7644367870367050827_n.jpg",
    imageAlt: "Tarmac driveway at a residential bungalow",
  },
  {
    id: "resin-bound-gallery-12",
    category: "Resin Bound",
    image: "/gallery/688956800_1554291706705241_3702887746546065635_n.jpg",
    imageAlt: "Resin bound driveway with decorative emblem inlay",
  },
  {
    id: "resin-bound-gallery-13",
    category: "Resin Bound",
    image: "/gallery/689009096_1556223703178708_3023758006728532054_n.jpg",
    imageAlt: "Resin bound driveway at a brick property",
  },
  {
    id: "tarmac-gallery-5",
    category: "Tarmac",
    image: "/gallery/689015908_1558824119585333_3151281941379597831_n.jpg",
    imageAlt: "Resurfaced tarmac car park with parking bay lines",
  },
  {
    id: "resin-bound-gallery-14",
    category: "Resin Bound",
    image: "/gallery/689017821_1552458336888578_7992578114122660338_n.jpg",
    imageAlt: "Resin bound driveway edge detail",
  },
  {
    id: "tarmac-gallery-6",
    category: "Tarmac",
    image: "/gallery/689838234_1553399266794485_2500825506788951416_n.jpg",
    imageAlt: "Tarmac driveway at a period property",
  },
  {
    id: "roads-lanes-gallery-1",
    category: "Roads & Lanes",
    image: "/gallery/694834206_1557019533099125_6103309178684307820_n.jpg",
    imageAlt: "Footpath resurfacing works in progress",
  },
  {
    id: "tarmac-gallery-7",
    category: "Tarmac",
    image: "/gallery/697792677_1557019516432460_475135446697662145_n.jpg",
    imageAlt: "Tarmac driveway at a residential property",
  },
  {
    id: "resin-bound-gallery-15",
    category: "Resin Bound",
    image: "/gallery/698209421_1561059389361806_7370727440355159578_n.jpg",
    imageAlt: "Resin bound footpath installation in progress",
  },
  {
    id: "resin-bound-gallery-16",
    category: "Resin Bound",
    image: "/gallery/699804328_1561721369295608_5550301788851850944_n.jpg",
    imageAlt: "Resin bound driveway surface",
  },
  {
    id: "tarmac-gallery-8",
    category: "Tarmac",
    image: "/gallery/700049857_1561721449295600_2439805601770063670_n.jpg",
    imageAlt: "Power trowelling equipment used during surfacing installation",
  },
  {
    id: "tarmac-gallery-9",
    category: "Tarmac",
    image: "/gallery/700096847_1559948936139518_4371628849745171777_n.jpg",
    imageAlt: "Resurfaced tarmac car park with court markings",
  },
  {
    id: "resin-bound-gallery-17",
    category: "Resin Bound",
    image: "/gallery/700955668_1561721199295625_8634463677427335948_n.jpg",
    imageAlt: "Resin bound driveway installation in progress",
  },
  {
    id: "resin-bound-gallery-18",
    category: "Resin Bound",
    image: "/gallery/701019434_1562596302541448_5587333806380183324_n.jpg",
    imageAlt: "Resin bound pathway beside a garden wall",
  },
  {
    id: "roads-lanes-gallery-2",
    category: "Roads & Lanes",
    image: "/gallery/701559013_1563599459107799_4625763931304252382_n.jpg",
    imageAlt: "Resurfaced private lane through open countryside",
  },
  {
    id: "resin-bound-gallery-19",
    category: "Resin Bound",
    image: "/gallery/702718500_1562596169208128_4881284490970532373_n.jpg",
    imageAlt: "Resin bound driveway with decorative Manx emblem inlay",
  },
  {
    id: "tarmac-gallery-10",
    category: "Tarmac",
    image: "/gallery/702764628_1562596419208103_569241585691137046_n.jpg",
    imageAlt: "Tarmac driveway at a residential property",
  },
  {
    id: "roads-lanes-gallery-3",
    category: "Roads & Lanes",
    image: "/gallery/702800727_1563598929107852_1268388369450357139_n.jpg",
    imageAlt: "Resurfaced lane leading to a rural property",
  },
  {
    id: "tarmac-gallery-11",
    category: "Tarmac",
    image: "/gallery/721516667_1588035779997500_3845153624523639094_n.jpg",
    imageAlt: "Tarmac driveway with illuminated edging detail",
  },
  {
    id: "tarmac-gallery-12",
    category: "Tarmac",
    image: "/gallery/724313188_1588035719997506_6250231971419847922_n.jpg",
    imageAlt: "Tarmac driveway with illuminated edging and planting bed",
  },
  {
    id: "groundworks-gallery-1",
    category: "Groundworks",
    image: "/gallery/825286630_1701841575283586_8280744325705534094_n.jpg",
    imageAlt: "Site preparation ahead of playground resurfacing",
  },
  {
    id: "tarmac-gallery-13",
    category: "Tarmac",
    image: "/gallery/825286631_1701841641950246_1342733883754367737_n.jpg",
    imageAlt: "Resurfaced playground area with running track markings",
  },
  {
    id: "groundworks-gallery-2",
    category: "Groundworks",
    image: "/gallery/825286647_1700787848722292_1344971380804336012_n.jpg",
    imageAlt: "Playground safety surfacing installation",
  },
  {
    id: "groundworks-gallery-3",
    category: "Groundworks",
    image: "/gallery/825286818_1701841578616919_8224299180532772531_n.jpg",
    imageAlt: "Checking the depth of playground safety surfacing",
  },
  {
    id: "groundworks-gallery-4",
    category: "Groundworks",
    image: "/gallery/825328781_1701841705283573_777714722802027712_n.jpg",
    imageAlt: "Site preparation works ahead of resurfacing",
  },
  {
    id: "tarmac-gallery-14",
    category: "Tarmac",
    image: "/gallery/825350913_1699056812228729_1341142783966624683_n.jpg",
    imageAlt: "Tarmac surfacing beside a school building",
  },
  {
    id: "tarmac-gallery-15",
    category: "Tarmac",
    image: "/gallery/825351113_1699056795562064_3428162477403482026_n.jpg",
    imageAlt: "Tarmac pathway beside an artificial grass area",
  },
  {
    id: "tarmac-gallery-16",
    category: "Tarmac",
    image: "/gallery/828811109_1701841621950248_1030150285131794722_n.jpg",
    imageAlt: "Tarmac driveway alongside a boundary fence",
  },
  {
    id: "resin-bound-gallery-20",
    category: "Resin Bound",
    image: "/gallery/830069471_1697979149003162_4061531755094205243_n.jpg",
    imageAlt: "Resin bound driveway at a residential property",
  },
  {
    id: "resin-bound-gallery-21",
    category: "Resin Bound",
    image: "/gallery/830074266_1697029235764820_4968114281381912914_n.jpg",
    imageAlt: "Resin bound pathway installation in progress",
  },
  {
    id: "tarmac-gallery-17",
    category: "Tarmac",
    image: "/gallery/831507012_1697979039003173_8184368965309395647_n.jpg",
    imageAlt: "Tarmac driveway with illuminated edging at night",
  },
  {
    id: "tarmac-gallery-18",
    category: "Tarmac",
    image: "/gallery/831523231_1697979135669830_5462960232971621698_n.jpg",
    imageAlt: "Tarmac driveway with illuminated edging detail",
  },
  {
    id: "groundworks-gallery-5",
    category: "Groundworks",
    image: "/gallery/833041063_1700787718722305_6934058720639579370_n.jpg",
    imageAlt: "Playground safety surfacing beneath a slide",
  },
  {
    id: "groundworks-gallery-6",
    category: "Groundworks",
    image: "/gallery/833218352_1701841671950243_3304913624525821390_n.jpg",
    imageAlt: "Playground safety surfacing installation",
  },
  {
    id: "tarmac-gallery-19",
    category: "Tarmac",
    image: "/gallery/833325213_1701841718616905_6830607069029324878_n.jpg",
    imageAlt: "Tarmac surfacing in a fenced play area",
  },
  {
    id: "resin-bound-gallery-22",
    category: "Resin Bound",
    image: "/gallery/833915467_1697029259098151_7800999858211578609_n.jpg",
    imageAlt: "Resin bound pathway leading to a garage",
  },
  {
    id: "roads-lanes-gallery-4",
    category: "Roads & Lanes",
    image: "/gallery/833926071_1697029229098154_4475602817241088947_n.jpg",
    imageAlt: "Resurfaced residential road and footway",
  },
  {
    id: "resin-bound-gallery-23",
    category: "Resin Bound",
    image: "/gallery/834769164_1697979119003165_350025287693506292_n.jpg",
    imageAlt: "Resin bound driveway at a residential property",
  },
  {
    id: "groundworks-gallery-7",
    category: "Groundworks",
    image: "/gallery/836512461_1701841625283581_6149001243256553336_n.jpg",
    imageAlt: "Playground safety surfacing pathway",
  },
  {
    id: "groundworks-gallery-8",
    category: "Groundworks",
    image: "/gallery/838219658_1699056828895394_7567123399171245414_n.jpg",
    imageAlt: "Artificial grass and gravel landscaping works",
  },
  {
    id: "groundworks-gallery-9",
    category: "Groundworks",
    image: "/gallery/839032908_1700787762055634_5167709595136696303_n.jpg",
    imageAlt: "Playground safety surfacing with climbing frame",
  },

];
