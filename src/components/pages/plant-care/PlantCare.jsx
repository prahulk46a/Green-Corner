import ProductDetails from "../../utils/product-detail/ProductDetails";
import SortByCategory from "../SortByCategory/SortByCategory";

const PlantCare = () => {
  let plant = {
    name: "Rose",
    id: 1,
    description:
      "Roses are beautiful flowering plants belonging to the Rosaceae family. Popular in gardens, they are loved for their vibrant colors and aromatic fragrance. Maharashtra, particularly Pune, has ideal conditions for growing roses due to its moderate climate.",
    price: 12,
    rating: 4.5,
    totalSalesLastMonth: 50,
    sellerName: "Pune Plant Co.",
    sellerAddress: {
      street: "Bhosale Nagar",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      pincode: "411007",
    },
    reviews: [
      {
        username: "AaravGardener",
        rating: 5,
        comment:
          "Absolutely love this rose! The vibrant red color brightens up my garden.",
        productDelivered: true,
        dateTime: "2024-11-20T10:15:00",
        likes: 42,
        dislikes: 2,
      },
      {
        username: "MahiGreen",
        rating: 5,
        comment:
          "Great product. It was well-packaged, and the plant arrived in perfect condition.",
        productDelivered: true,
        dateTime: "2024-11-19T15:48:00",
        likes: 35,
        dislikes: 1,
      },
      {
        username: "AdvikaDecor",
        rating: 4,
        comment:
          "The plant looks amazing! But I wish the pot was a bit larger for more stability.",
        productDelivered: true,
        dateTime: "2024-11-18T20:30:00",
        likes: 27,
        dislikes: 0,
      },
      {
        username: "RudraNature",
        rating: 5,
        comment:
          "Very easy to maintain. It's growing beautifully in my garden.",
        productDelivered: true,
        dateTime: "2024-11-17T14:10:00",
        likes: 30,
        dislikes: 3,
      },
      {
        username: "KavyaFan",
        rating: 5,
        comment:
          "My mom loved this as a gift! She said it's the best addition to her garden.",
        productDelivered: true,
        dateTime: "2024-11-16T12:45:00",
        likes: 40,
        dislikes: 1,
      },
      {
        username: "IshaanFoliage",
        rating: 4,
        comment:
          "Beautiful rose, but the blooms didn't last as long as I expected. Still, it’s a stunning plant.",
        productDelivered: true,
        dateTime: "2024-11-15T18:20:00",
        likes: 25,
        dislikes: 4,
      },
      {
        username: "RiyaGifts",
        rating: 5,
        comment: "My friend loved this rose! Great gift idea.",
        productDelivered: true,
        dateTime: "2024-11-14T11:00:00",
        likes: 33,
        dislikes: 0,
      },
      {
        username: "VedantPot",
        rating: 5,
        comment:
          "Perfect size for my small garden. The rose is blooming beautifully.",
        productDelivered: true,
        dateTime: "2024-11-13T09:30:00",
        likes: 20,
        dislikes: 2,
      },
      {
        username: "AnayaObsessed",
        rating: 5,
        comment:
          "I absolutely adore this rose! It adds so much color to my balcony garden.",
        productDelivered: true,
        dateTime: "2024-11-12T17:40:00",
        likes: 50,
        dislikes: 1,
      },
      {
        username: "OmFastDelivery",
        rating: 5,
        comment:
          "Great service! The rose was delivered quickly and in perfect condition.",
        productDelivered: true,
        dateTime: "2024-11-11T13:15:00",
        likes: 45,
        dislikes: 0,
      },
    ],
    availability: "In Stock",
    quantityAvailable: 100,
    categories: ["Outdoor Plants", "Indoor Plants", "Flowering Plants"],
    sunlightRequirement: "Full Sun",
    moistureRequirement: "Medium",
    soilType: "Loamy soil",
    season: "Winter, Spring",
    growthRate: "Moderate",
    potSizeRequired: "Medium",
    genus: "Rosa",
    localName: "गुलाब (Gulab)",
    regionalName: "गुलाब (Gulab)",
    biologicalName: "Rosa spp.",
    botanicalName: "Rosa hybrida",
    tags: ["Gift Ideas", "Flowering Plants", "Indoor Decor"],
    shippingStates: ["Maharashtra", "Goa", "Karnataka"],
    primaryImage:
      "https://nurserylive.com/cdn/shop/products/nurserylive-miniature-rose-button-rose-yellow-plant_600x600.jpg?v=1634224134",
    secondaryImages: [
      "https://nurserylive.com/cdn/shop/products/nurserylive-g-rose-orange-plant_600x600.jpg?v=1634227422",
      "https://nurserylive.com/cdn/shop/products/nurserylive-rose-orange-plant-1_540x720.jpg?v=1634227420",
      "https://nurserylive.com/cdn/shop/products/nurserylive-rose-orange-plant-4_540x720.jpg?v=1634227413",
      "https://nurserylive.com/cdn/shop/products/nurserylive-g-rose-orange-plant_600x600.jpg?v=1634227422",
    ],
    shoppingPolicy:
      "Ships within 3-5 business days across Pune and Maharashtra.",
    refundPolicy:
      "30-day refund policy with original receipt. Free return pickup within Pune city limits.",
  };

  return (
    <div>
      <ProductDetails plant={plant} />
    </div>
  );
};

export default PlantCare;
