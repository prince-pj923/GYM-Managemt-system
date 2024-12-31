const Listing = require("../models/listings");

const sampleListings = [
    {
    name : "Micronized Creatine Powder",
    description : 
    "3 Grams of 100% Creatine Monohydrate per Serving. Zero Calories & Zero Carbohydrates. Unflavored can be mixed with your favorite beverage with ease. Micronized for easy mixing",
    image : {
        filename : "listingimage",
        url : "https://m.media-amazon.com/images/I/61mQAPUdgmL._SX679_.jpg",
    },
    amount : "1kg",
    price:599,
},
{
    name:"Gold Protein Powder",
    description :
    "Whey Blend (Whey Protein Isolate-primary source, Whey Protein Concentrate, Hydrolysed Whey Protein/Whey Peptides)",
    image: {
        filename: "listingimage",
        url: "https://cdn.staticans.com/image/tr:e-sharpen-01,h-712,w-712,cm-pad_resize/data/Optimum-Nutrition/13-June-2023/1083064_1.jpg",
    },
    amount : "1.5kg",
    price : 3000,
},
{
    name: "Optimum Nutrition",
    description:
    "25 Vitamins & Minerals Plus Creatine & Glutamine",
    image: {
        filename:"listingimage",
        url : "https://images-cdn.ubuy.co.in/673ebe429d7a697f342e885f-optimum-nutrition-serious-mass-weight.jpg",
    },
    amount : "2kg",
    price : 7999,
},
{
    name : "Vegan Protein Powder",
    description:
    "Our Plant Protein Powder contains essential amino acids, anti oxidants, superfoods, essential vitamins and minerals that target troubled muscle groups to give them the fuel they need to achieve maximum pump.",
    image : {
        filename: "listingimage",
        url:"https://mycf.in/cdn/shop/files/VEGAN-PROTINE_495e5253-1907-46a7-bc9b-94e62d9397fe_1080x.jpg?v=1713707363",
    },
    amount : "2.5kg",
    price : 1499,
},
{
    name : "Organic Cow Ghee",
    description:
    "Taste the true essence of pure organic ghee! Crafted using organic milk cream from happy, healthy cows living on organic farms, this ghee pays homage to the intricacies of the traditional Bilona method that dates back centuries",
    image : {
        filename: "listingimage",
        url: "https://akshayakalpa.org/wp-content/uploads/2024/07/GHEE_195ml_Front_1000x1000-1.jpg",
    },
    amount : "350ml",
    price:399,
},
{
    name:"Organic Desi Ghee",
    description:"This Desi Ghee is made by simmering butter over low heat and removing the milk solids as they form. The result is a delicious, creamy spread great for baking, sauteing and frying and one of the best Desi Ghee Brand in India.",
    image : {
        filename : "listingimage",
        url: "https://www.bigbasket.com/media/uploads/p/l/20005456_11-organic-india-desi-ghee.jpg",
    },
    amount : "500",
    price:599
},
{
    name:"PATANJALI Cow's Ghee",
    description:
    "Patanjali Cow Ghee is a top-notch, pure Desi Cow Ghee, naturally crafted from the milk of grass-fed cows. Loaded with essential nutrients and vitamins like A, D, E, and K, it nourishes your body but also aids in healing and serves as a natural energy source. Packed with antioxidants for robust immunity, Cow Ghee is deeply embedded in India's rich cultural heritage, cherished for its auspiciousness and nutritional virtues. It's easy on the digestive system, boasts a delightful aroma, and offers a golden, granular texture. Whether you seek to gain weight or desire an energy boost, Patanjali Cow Ghee embodies tradition and well-being in every spoonful",
    image : {
        filename: "listingimage",
       url:"https://m.media-amazon.com/images/I/614DT5y3VHL.jpg",
    },
    amount:"500ml",
    price:499,
},
{
    name:"Beanut Choclate_Creamy",
    description:
    "Beanut Peanut Butter Maintaining healthy lifestyle is not everyones cup of tea and most of the population struggles with the urge for a delicious meal, and in turn skips a healthy one.",
     image : {
        filename: "listingimage",
        url:"https://rukminim2.flixcart.com/image/850/1000/xif0q/jam-spread/f/s/p/1000-beanut-dark-choclate-creamy-peanut-butter-protein-non-gmo-original-imah5vtsxbprn3cu.jpeg?q=90&crop=false",
    },
    amount:"240g",
    price:95,
},
{
    name:"Optimum Nutrition",
    description:
    "Optimum Nutrition (ON) Serious High Protein with Vitamins and Minerals Weight Gainers/Mass Gainers  (3 kg, Chocolate)",
    image:{
        filename:"listingimage",
        url:"https://m.media-amazon.com/images/I/71R-BZ0DTFL._AC_UF1000,1000_QL80_.jpg",
    },
    amount:"3Kg",
    price:3299,
},
{
    name:"DNUTRIXN Advance",
    desciption:
      "DNUTRIXN Advance Mass Gainer with high Protein 63G and Calories 1200+ Kcal , Faster and Better Absorption ,This Mass Gainer is a blend of High Quality Protein and Carbohydrates",
    image:{
        filename:"listingimage",
        url:"https://rukminim2.flixcart.com/image/850/1000/xif0q/protein-supplement/0/x/g/weight-gainers-mass-gainers-advance-high-protein-mass-gainer-original-imahyhndh2g7mqj4.jpeg?q=90&crop=false",
    },
    amount:"500g",
    price:699,
},
{
    name:"S-IT-IS Peanut",
    description:
      "100% NATURAL, NO ADDED SUGAR: AS-IT-IS Peanut butter stands out on its commitment to using single ingredient – made from only 100% natural, roasted peanuts, without the use of added salt, sugar or oil",
    image:{
        filename:"listingimage",
        url:"https://m.media-amazon.com/images/I/61pgjJfiqdL.jpg",
    },
    amount:"1Kg",
    price:399,
},
{
    name:"Amul SHUDH GHEE",
    description:
    "Amul Ghee is made from fresh cream and it has typical rich aroma and granular texture. Amul Ghee is an ethnic product made by dairies with decades of experience, and rich source of Vitamin A,D,E and K.",
    image:{
        filename:"listingimage",
        url:"https://www.jiomart.com/images/product/150x150/490001521/amul-pure-ghee-1-l-tin-product-images-o490001521-p490001521-0-202206061807.jpg",
    },  
    amount:"1Kg",
    price:849,
},
{
    name:"BOLDFIT Typhoon",
    desciption:"NO LEAKS, NO DRIPS 100% GUARANTEE : Ultra Tight Screw On Lid, Anti-leak Tested And Proven, Lockable Flip Top, Stays Open If Needed",
    image:{
        filename:"listingimage",
        url:"https://rukminim2.flixcart.com/image/850/1000/kykgb680/bottle/9/u/c/650-typhoon-gym-shaker-bottles-650-ml-for-protein-shake-100-original-imagarj5yqh8h8nf.jpeg?q=90&crop=false",
    },
    amount:"650ml",
    price:179,
},
{
    name:"MUSCLEBLAZE Tornado",
    description:
    "MUSCLEBLAZE Tornado 500 ml Shaker  (Pack of 1, Black, Plastic)",
    image:{
        filename:"listingimage",
        url:"https://rukminim1.flixcart.com/image/300/300/xif0q/bottle/s/p/q/500-tornado-1-nut8505-01-muscleblaze-original-imagxx86fbz2hbds.jpeg",
    },
    amount:"500ml",
    price:299,
},
{
    name:"BOLDFIT Shaker",
    description:
    "BOLDFIT Shaker Bottles For Protein Shake Gym Sipper Bottle Blender Men Women Boys Girls 600 ml Shaker  (Pack of 1, Black, Plastic)",
    image:{
        filename:"listingimage",
        url:"https://m.media-amazon.com/images/I/81hUtMxX8eL._AC_UF894,1000_QL80_.jpg",
    },
    amount:"500ml",
    price:299,
},
{
    name:"Natural Almonds",
    description:
    "Experience the rich tapestry of tastes, from the crunchy perfection of almonds and cashews to the sweet, luscious delight of raisins and figs",
    image:{
        filename:"listingimage",
        url:"https://rukminim2.flixcart.com/image/850/1000/xif0q/nut-dry-fruit/u/i/s/450-premium-natural-californian-badam-1-pouch-happilo-original-imah7d4rvtuz37zc.jpeg?q=20&crop=false",
    },
    amount:"200g",
    price:199,
},
{
    name:"Dry fruits combo pack",
    description:
    "41 foods Dry fruits combo pack of Healthy 5 Kaju Pista Badam Akhrot Kishmish 750 GM Almonds, Pistachios, Cashews, Raisins, Walnuts  (5 x 150 g)",
    image:{
        filename:"listingimage",
        url:"https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/s/y/c/750-dry-fruits-combo-pack-of-healthy-5-kaju-pista-badam-akhrot-original-imaghdtzbgmvhtqg.jpeg?q=70"   
    },
    amount:"5*150",
    price:599,
},
{
    name:"Cashew nuts",
    description:"Cashews are a highly nutritious and versatile nut that can be enjoyed in a variety of ways. With their rich content of healthy fats, protein, vitamins, and minerals",
    image:{
        filename:"listingimage",
        url:"https://m.media-amazon.com/images/I/71ur5pmsDcL.jpg",
    },
    amount:"250gm",
    price:499,
},
{
    name:"Mix Dry Fruit",
    description:
    "HEALTHY,NATURAL,PREMIUM Granic farms inspires healthy eating at affordable price our brand is dedicated to bringing you wholesome meals that promote vitality,strong immunity",
    image:{
        filename:"listingimage",
        url:"https://m.media-amazon.com/images/I/81ThtOmxIlL._AC_UF1000,1000_QL80_.jpg",
    },
    amount:"500g",
    price:269,
},
{
    name:"Black Dates",
    description:
    "NutroVally dates are not only delicious but also pack a nutritional punch, offering several health benefits. They have a natural sweetness and rich flavor that people often associate with dessert.",
    image:{
        filename:"listingimage",
        url:"https://m.media-amazon.com/images/I/71UQrdgNhHL._AC_UF1000,1000_QL80_.jpg",
    },
    amount:"800g",
    price:299,
},
{
    name:"Sampann Kishmish",
    description:
    "Tata Sampann 100% Pure Premium Raisins Tata Sampann brings you a whole range of premium dry fruits, nuts, and raisins for a wholesome snacking experience.",
    image:{
        filename:"listingimage",
        url:"https://m.media-amazon.com/images/I/61JL78FJWOL._AC_UF894,1000_QL80_.jpg",
    },
    amount:"500g",
    price:229,
},
{
    name:"Afghani Anjeer",
    desciption:
    "Dive into a world of unparalleled flavor and nutrition with Happilo Dryfruits and Nuts. Carefully sourced from the finest orchards and fields, each nut and fruit in our selection is a testament to nature's bounty.Experience the rich tapestry of tastes, from the crunchy perfection of almonds and cashews to the sweet, luscious delight of raisins and figs",
    image: {
        filename:"listingimage",
        url:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ6QP9GhC7RjcS-IFkajrVC2BBMH1QCLw47rlxfLGubCeBOiHJDsvq84dYs_84yIqR9T6hU3s3MYlVeMRWcgZlaWIKotKfco_NzM1MUWsqugICrZmRIcIac-Z7BdbWNtj2BxmsduEvXMw8&usqp=CAc",
    },
    amount:"200g",
    price:419,  
}
];

module.exports = {data: sampleListings};