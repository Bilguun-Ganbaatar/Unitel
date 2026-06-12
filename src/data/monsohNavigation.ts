export const sectionAnchor = { scrollMarginTop: 90 } as const;

export type MenuItem = {
  label: string;
  description: string;
  id: string;
  image?: string;
};

export type FeatureGroup = {
  viewAllLabel: string;
  title: string;
  id: string;
  items: MenuItem[];
};

export const featureGroups: FeatureGroup[] = [
  {
    title: "Санхүү",
    id: "features-financial",
    items: [
      {
        label: "Нэхэмжлэл & төлбөр",
        description: "Төлбөрөө хурдан, хялбар авах",
        id: "feature-invoicing-payments",
        image: "/images/finance/payment_preview.jpg",
      },
      {
        label: "Нягтлан бодох бүртгэл",
        description: "Энгийн, найдвартай санхүүгийн бүртгэл",
        id: "feature-accounting",
        image: "/images/finance/accounting.jpeg",
      },
      {
        label: "Төсөв & тайлан",
        description: "Удирдах зөвлөлд зориулсан мэргэжлийн тайлан",
        id: "feature-budgets-reports",
        image: "/images/finance/report.webp",
      },
      {
        label: "Банкны холболт",
        description: "Гүйлгээ гараар шивэх ажлыг багасгана",
        id: "feature-bank-integrations",
        image: "/images/finance/bank.jpg",
      },
      {
        label: "Шилэн данс",
        description: "Оршин суугчдад нээлттэй ил тод систем",
        id: "feature-transparent-account",
        image: "/images/finance/financial-transparency.jpg",
      },
      {
        label: "Санхүүгийн тооцоолол болон төсвийн программ",
        description:
          "Хүний ажлыг хөнгөвчилж тайлан тооцоо төсвийн нэгтгэлийг хурдан шуурхай гаргана",
        id: "feature-bookkeeping-services",
        image: "/images/finance/software.avif",
      },
    ],
    viewAllLabel: "Санхүүгийн боломж",
  },
  {
    title: "Харилцаа холбоо",
    id: "features-communications",
    items: [
      {
        label: "Нийтэд мэдээлэл хүргэх",
        description: "Мессеж, имэйл, дуудлагаар оршин суугчдад хүрэх",
        id: "feature-mass-communication",
        image: "/images/communication/mass.webp",
      },
      {
        label: "Мэдэгдлийн булан",
        description: "Зар, мэдэгдлийг нэг дор эмх цэгцтэй хүргэх",
        id: "feature-mailroom",
        image: "/images/communication/board.webp",
      },
      {
        label: "Хэлэлцүүлгийн самбар",
        description: "Хотхоны дотоод форум, санал солилцоо",
        id: "feature-message-boards",
        image: "/images/communication/discussion.webp",
      },
      {
        label: "Вэб хуудас бүтээгч",
        description: "СӨХ, хотхонд зориулсан танилцуулга вэб хуудас",
        id: "feature-website-builder",
        image: "/images/communication/web.webp",
      },
      {
        label: "Зөрчил бүртгэл",
        description: "Дотоод журам, зөрчлийг хялбар бүртгэж хянах",
        id: "feature-violations",
        image: "/images/communication/violation.jpeg",
      },
      {
        label: "Баримт бичгийн сан",
        description: "Гэрээ, дүрэм, тайлангаа хадгалж хуваалцах",
        id: "feature-document-storage",
        image: "/images/communication/document.jpg",
      },
    ],
    viewAllLabel: "Харилцаа холбооны бүх боломж",
  },
  {
    title: "Удирдлага",
    id: "features-management",
    items: [
      {
        label: "Зогсоолын менежмент",
        description: "Өөрийн машин болон зочны машин нээлттэй нэвтрүүлэх",
        id: "feature-parking",
        image: "/images/management/parking.png",
      },
      {
        label: "Гражын зогсоол түрээслэх",
        description: "Та өөрийн өмчийн гражын зогсоолыг түрээслэх боломжтой",
        id: "feature-rent-garage",
        image: "/images/management/garage.jpg",
      },
      {
        label: "Конторын төлбөр",
        description: "Ус дулааны үйлчилгээ үзүүлдэг байгууллагын төлбөр төлөх боломжтой",
        id: "feature-kontor",
        image: "/images/management/utility.jpg",
      },
      {
        label: "Дундын өмч",
        description: "Оршин суугчдын амьдардаг орчны хариуцлагыг нэмэгдүүлэх",
        id: "feature-common-property",
        image: "/images/management/property.png",
      },
    ],
    viewAllLabel: "Удирдлагын бүх боломж",
  },
  {
    title: "Бүтээгдэхүүн",
    id: "features-product",
    items: [
      {
        label: "Интеграци",
        description: "Хэрэгтэй системүүдийг нэг дор холбох",
        id: "feature-integrations",
      },
      {
        label: "Аюулгүй байдал",
        description: "Өгөгдөл хамгаалалт, найдвартай хандалт",
        id: "feature-security",
      },
      {
        label: "Дэмжлэг & нэвтрүүлэлт",
        description: "Систем нэвтрүүлэх болон хэрэглэгчийн тусламж",
        id: "feature-support-onboarding",
      },
    ],
    viewAllLabel: "Бүтээгдэхүүний бүх боломж",
  },
  {
    title: "Давуу тал",
    id: "features-advantages",
    items: [
      {
        label: "Мэргэжлийн байгууллагын үйлчилгээ",
        description: "",
        id: "feature-professionals",
      },
      {
        label: "Тоног төхөөрөмж",
        description: "Хэрэгцээтэй тоног төхөөрөмжүүд",
        id: "feature-equipments",
      },
      {
        label: "Хямдралтай үйлчиллэгээ",
        description: "Халмонд трейд ХХК-ийн тоног төхөөрөмжүүд 5-10%-ийн хямдрал эдлэх боломж",
        id: "feature-discounts",
      },
    ],
    viewAllLabel: "Давуу талын бүх боломж",
  },
];

export const solutionItems: MenuItem[] = [
  {
    label: "СӨХ",
    description: "Удирдах зөвлөл, СӨХ-ийн ажилтнуудад зориулсан өдөр тутмын удирдлага",
    id: "solution-self-managed",
  },
  {
    label: "Менежментийн компаниуд",
    description: "Олон хотхон, олон объект удирддаг байгууллагад зориулсан шийдэл",
    id: "solution-property-management",
  },
  {
    label: "Төлбөртэй зогсоол",
    description: "Зогсоолын төлбөр, нэвтрэлт, ашиглалт, орлогыг нэг дор удирдах шийдэл",
    id: "solution-parking",
  },
  {
    label: "Аж ахуй нэгж",
    description:
      "очид буудал, эмнэлэг, оффис, үйлчилгээний байгууллага зэрэг олон өрөө, нэгжтэй байгууллагын төлбөр, засвар үйлчилгээ, мэдээлэл хүргэлт, дотоод удирдлагыг нэг дор төвлөрүүлэх шийдэл",
    id: "solution-companies",
  },
];

export const whyItems: MenuItem[] = [
  {
    label: "Бидний тухай",
    description: "Мон-Сөхийг Монгол хотхон, СӨХ-ийн бодит хэрэгцээнд зориулж хөгжүүлсэн.",
    id: "why-about-us",
  },
  {
    label: "Амжилтын түүхүүд",
    description: "Хотхон, СӨХ-үүд өдөр тутмын ажлаа хэрхэн хялбарчилж байгаа жишээ.",
    id: "why-success-stories",
  },
  {
    label: "Түгээмэл асуултууд",
    description: "Нэвтрүүлэлт, төлбөр, хэрэглээтэй холбоотой хамгийн нийтлэг асуултууд.",
    id: "faq",
  },
  {
    label: "Хэвлэл мэдээлэл",
    description: "Мон-Сөхийн тухай мэдээ, танилцуулга, шинэчлэлүүд.",
    id: "why-press",
  },
];

export const resourceItems: MenuItem[] = [
  {
    label: "Нөөцийн төв",
    description: "СӨХ-ийн дижитал шилжилтэд хэрэгтэй бүх мэдээлэл.",
    id: "resource-hub",
  },
  {
    label: "Блог",
    description: "Хотхон, төлбөр, харилцаа холбоо, удирдлагын зөвлөмжүүд.",
    id: "resource-blog",
  },
  {
    label: "Нэр томьёоны тайлбар",
    description: "СӨХ, хотхон, санхүүгийн хэрэглэгддэг ойлголтуудыг энгийнээр.",
    id: "resource-glossary",
  },
  {
    label: "Мэдлэгийн сан",
    description: "Систем ашиглах заавар, алхамчилсан тусламж.",
    id: "resource-knowledge-base",
  },
  {
    label: "Холбоо барих",
    description: "Борлуулалт, дэмжлэгийн багтай холбогдох.",
    id: "contact",
  },
];

export const faqData = [
  {
    value: "Мон-Сөхийг ашиглаж эхлэхэд ямар мэдээлэл хэрэгтэй вэ?",
    description:
      "Объектын мэдээлэл, өрх/өмчлөгчийн мэдээлэл, СӨХ-ийн ажилтнууд, төлбөрийн ангилал, эхний үлдэгдэл зэрэг үндсэн мэдээллээр бүртгэл үүсгэнэ.",
  },
  {
    value: "Оршин суугч төлбөрөө апп дээрээс төлж болох уу?",
    description:
      "Болно. Оршин суугч төлбөрийн нэхэмжлэлээ харах, төлөх, төлбөрийн түүхээ шалгах боломжтой байхаар зохион байгуулна.",
  },
  {
    value: "СӨХ-ийн тайлан, зар мэдээ ил тод харагдах уу?",
    description:
      "Тийм. Санхүүгийн тайлан, зар мэдээ, засвар үйлчилгээний мэдээлэл, санал асуулгыг нэг платформ дээр төвлөрүүлж болно.",
  },
];
