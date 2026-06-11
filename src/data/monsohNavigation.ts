export const sectionAnchor = { scrollMarginTop: 90 } as const;

export type MenuItem = {
  label: string;
  description: string;
  id: string;
};

export type FeatureGroup = {
  title: string;
  id: string;
  items: MenuItem[];
  viewAllLabel: string;
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
      },
      {
        label: "Нягтлан бодох бүртгэл",
        description: "Энгийн, найдвартай санхүүгийн бүртгэл",
        id: "feature-accounting",
      },
      {
        label: "Төсөв & тайлан",
        description: "Удирдах зөвлөлд зориулсан мэргэжлийн тайлан",
        id: "feature-budgets-reports",
      },
      {
        label: "Банкны холболт",
        description: "Гүйлгээ гараар шивэх ажлыг багасгана",
        id: "feature-bank-integrations",
      },
      {
        label: "Өглөг & нийлүүлэгч",
        description: "Зөвшөөрөл, төлбөрийг автомат урсгалд оруулах",
        id: "feature-payables-vendors",
      },
      {
        label: "Санхүүгийн бүртгэлийн үйлчилгээ",
        description: "СӨХ-ийн санхүүгийн бүртгэлд мэргэжлийн дэмжлэг",
        id: "feature-bookkeeping-services",
      },
    ],
    viewAllLabel: "Санхүүгийн бүх боломж",
  },
  {
    title: "Харилцаа холбоо",
    id: "features-communications",
    items: [
      {
        label: "Нийтэд мэдээлэл хүргэх",
        description: "Мессеж, имэйл, дуудлагаар оршин суугчдад хүрэх",
        id: "feature-mass-communication",
      },
      {
        label: "Мэдэгдлийн булан",
        description: "Зар, мэдэгдлийг нэг дор эмх цэгцтэй хүргэх",
        id: "feature-mailroom",
      },
      {
        label: "Хэлэлцүүлгийн самбар",
        description: "Хотхоны дотоод форум, санал солилцоо",
        id: "feature-message-boards",
      },
      {
        label: "Вэб хуудас бүтээгч",
        description: "СӨХ, хотхонд зориулсан танилцуулга вэб хуудас",
        id: "feature-website-builder",
      },
    ],
    viewAllLabel: "Харилцаа холбооны бүх боломж",
  },
  {
    title: "Удирдлага",
    id: "features-management",
    items: [
      {
        label: "Зөрчил бүртгэл",
        description: "Дотоод журам, зөрчлийг хялбар бүртгэж хянах",
        id: "feature-violations",
      },
      {
        label: "Хүсэлтийн маягт",
        description: "Засвар, санал, хүсэлтийг inbox-оос салгах",
        id: "feature-request-forms",
      },
      {
        label: "Баримт бичгийн сан",
        description: "Гэрээ, дүрэм, тайлангаа хадгалж хуваалцах",
        id: "feature-document-storage",
      },
      {
        label: "Санал асуулга & судалгаа",
        description: "Цаасгүй санал хураалт, оршин суугчдын судалгаа",
        id: "feature-voting-surveys",
      },
      {
        label: "Оршин суугчийн портал",
        description: "Оршин суугч бүрт зориулсан нэг нэгдсэн төв",
        id: "feature-owner-portals",
      },
      {
        label: "Шилжилтийн баримт",
        description: "Лавлагаа, өмчлөл шилжилтийн бичиг баримтыг цэгцлэх",
        id: "feature-resale-documents",
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
];

export const solutionItems: MenuItem[] = [
  {
    label: "Өөрөө удирддаг СӨХ",
    description: "Удирдах зөвлөл, СӨХ-ийн ажилтнуудад зориулсан өдөр тутмын удирдлага",
    id: "solution-self-managed",
  },
  {
    label: "Менежментийн компаниуд",
    description: "Олон хотхон, олон объект удирддаг байгууллагад зориулсан шийдэл",
    id: "solution-property-management",
  },
];

export const whyItems: MenuItem[] = [
  {
    label: "Бидний тухай",
    description: "Монсөхийг Монгол хотхон, СӨХ-ийн бодит хэрэгцээнд зориулж хөгжүүлсэн.",
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
    description: "Монсөхийн тухай мэдээ, танилцуулга, шинэчлэлүүд.",
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
    value: "Монсөхийг ашиглаж эхлэхэд ямар мэдээлэл хэрэгтэй вэ?",
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
