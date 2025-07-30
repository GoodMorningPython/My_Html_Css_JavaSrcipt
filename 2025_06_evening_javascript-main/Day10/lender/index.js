// 신문법
const clothes = [
  {
    src: "image/images.jpg",
    brand: "독일 Heckler & Koch",
    name: "정식명칭: H&K HK416 / 별명: 자연산 흥국이",
    price: "850$ (원화 기준: 1,183,310원)",
  },
  {
    src: "image/images.jpg",
    brand: "독일 Heckler & Koch",
    name: "정식명칭: H&K HK416 / 별명: 자연산 흥국이",
    price: "850$ (원화 기준: 1,183,310원)",
  },
  {
    src: "image/images.jpg",
    brand: "독일 Heckler & Koch",
    name: "정식명칭: H&K HK416 / 별명: 자연산 흥국이",
    price: "850$ (원화 기준: 1,183,310원)",
  },
  {
    src: "image/images.jpg",
    brand: "독일 Heckler & Koch",
    name: "정식명칭: H&K HK416 / 별명: 자연산 흥국이",
    price: "850$ (원화 기준: 1,183,310원)",
  },
  {
    src: "image/images.jpg",
    brand: "독일 Heckler & Koch",
    name: "정식명칭: H&K HK416 / 별명: 자연산 흥국이",
    price: "850$ (원화 기준: 1,183,310원)",
  },
  {
    src: "image/images.jpg",
    brand: "독일 Heckler & Koch",
    name: "정식명칭: H&K HK416 / 별명: 자연산 흥국이",
    price: "850$ (원화 기준: 1,183,310원)",
  },
  {
    src: "image/images.jpg",
    brand: "독일 Heckler & Koch",
    name: "정식명칭: H&K HK416 / 별명: 자연산 흥국이",
    price: "850$ (원화 기준: 1,183,310원)",
  },
  {
    src: "image/images.jpg",
    brand: "독일 Heckler & Koch",
    name: "정식명칭: H&K HK416 / 별명: 자연산 흥국이",
    price: "850$ (원화 기준: 1,183,310원)",
  },
  {
    src: "image/images.jpg",
    brand: "독일 Heckler & Koch",
    name: "정식명칭: H&K HK416 / 별명: 자연산 흥국이",
    price: "850$ (원화 기준: 1,183,310원)",
  },
  {
    src: "image/images.jpg",
    brand: "독일 Heckler & Koch",
    name: "정식명칭: H&K HK416 / 별명: 자연산 흥국이",
    price: "850$ (원화 기준: 1,183,310원)",
  },
  {
    src: "image/images.jpg",
    brand: "독일 Heckler & Koch",
    name: "정식명칭: H&K HK416 / 별명: 자연산 흥국이",
    price: "850$ (원화 기준: 1,183,310원)",
  },
  {
    src: "image/images.jpg",
    brand: "독일 Heckler & Koch",
    name: "정식명칭: H&K HK416 / 별명: 자연산 흥국이",
    price: "850$ (원화 기준: 1,183,310원)",
  },
  {
    src: "image/images.jpg",
    brand: "독일 Heckler & Koch",
    name: "정식명칭: H&K HK416 / 별명: 자연산 흥국이",
    price: "850$ (원화 기준: 1,183,310원)",
  },
];

const itemTag = (item) => `
    <div class="item">
        <img src="${item.src}" alt="" />
        <div class="info">
            <span class="brand">${item.brand}</span>
            <span class="name">${item.name}</span>
            <span class="price">${item.price}</span>
        </div>
    </div>
`;

const box = document.querySelector(".box");
clothes.forEach((x) => {
  box.insertAdjacentHTML("beforeend", itemTag(x));
});
