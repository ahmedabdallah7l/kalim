var firstItem=document.querySelector("#firstItem")
var secondItem=document.querySelector("#secondItem")
var thirdItem=document.querySelector("#thirdItem")
var forthItem=document.querySelector("#forthItem")
var Product

console.log(firstItem)

if (localStorage.getItem("beeeb") != null) {
    Product = JSON.parse(localStorage.getItem("beeeb"));
  } else {
    Product = [];
  }


firstItem.addEventListener("click",()=>
{
    console.log("ldfdlkfl")
})
firstItem.addEventListener("click",()=>
{
    let item=
    {
        productArabicName:`كليم تراثي صوف يدوي`,
        productArabicContent:`الكليم الخاص بنا هو صوف مصري منسوج يدويًا مصنوع يدويًا 100٪. تأتي هذه القطعة من مجموعتنا النباتية. تم تصميم الزخارف من خلال تكييف الأشكال العضوية لنباتات مختلفة بزخارف هندسية وثقافية وفولكلورية ، وبعضها مستوحى من زخارف فارسية كلاسيكية تحمل معاني رمزية. يحقق الحرفيون الذين صنعوا هذا المنتج أجورًا عادلة ويحافظون على التراث الثقافي المصري من خلال ممارسة حرفة انتقلت إليهم من جيل إلى جيل. يتيح لنا شراء هذا المنتج مواصلة مهمتنا المتمثلة في إحياء الحرف المحلية واستدامتها وتمكين مجتمعاتهم.`,
        productArabicInstruction:`تنظيف جاف - غسيل يدوي بالماء البارد - بدون مجفف`,
        productGermanContent:`Unser Kelim beseht aus handgewebter ägyptischer Wolle, die zu 100 % handgefertigt is. Dieses Stück sammt aus un-serer Botanical-Kollektion. Die Motive wurden entworfen, indem die organischen Formen verschiedener Pfanzen mit geometrischen, kulturellen und folklorisischen Motiven adaptiert wurden. Einige davon wurden von Motiven aus dem klassischen Persisch inspiriert, die symbolische Bedeutungen haben. Die Handwerker, die dieses Produkt hergesellt haben, verdienen faire Löhne und bewahren das ägyptische Kulturerbe, indem sie ein Handwerk ausüben, das ihnen von Generation zu Generation weitergegeben wurde. Der Kauf dieses Produkts ermöglicht es uns, unsere Mission fortz-usetzen, das lokale Handwerk wiederzubeleben und zu erhalten und ihre Gemeinden zu särken.
        `,
        productGermanInstruction:`Chemische Reinigung – Handwäsche mit kaltem Wasser – kein Trockner
        `,
        productImage:"./images/cart 1.png",
        productName:"Heritage Wool Handmade Kilim",
        productContent:`Our Kilim is hand-loomed Egyptian Wool which is all 100% handmade. This piece comes from our Botanical collection. The motifs were designed by adapting the organic forms of various plants with geometrical, cultur-al, and folkloric motifs.Some of these were inspired by motifs from classic Persian which carry symbolic mean-ings. The artisans who made this product are making fair wages and preserving Egyptian cultural heritage by practicing a craft that has been passed down to them generation to generation. Purchasing this product allows us to continue our mission of reviving and susaining local crafts and empowering their communities.
        `,
        productInstruction:`Dry clean - cold water hand wash - no dryer`,
        productSize:`70x145`,
        productPrice:`880.00`
    }
    Product.push(item)
    localStorage.setItem("beeeb",JSON.stringify(Product))
})

secondItem.addEventListener("click",()=>
{
    let item=
    {
        productArabicName:`كليم بلوش صوف يدوي `,
        productArabicContent:'الكليم الخاص بنا هو صوف مصري منسوج يدويًا مصنوع يدويًا 100٪. تأتي هذه القطعة من مجموعتنا الهندسية ، لذلك كان من المهم أن يتم الأبتكار في الكليم التقليدي الذي اعتاد حرفيو أسيوط على صنعه. تم تحديث التصاميم من هذه المجموعة من خلال تقليل كمية الألوان المستخدمة ، وكذلك تكرار الأشكال لخلق المزيد من الأنماط الموحدة لإضفاء إحساس بالحداثة. يحقق الحرفيون الذين صنعوا هذا المنتج أجورًا عادلة ويحافظون على التراث الثقافي المصري من خلال ممارسة حرفة انتقلت إليهم من جيل إلى جيل. يتيح لنا شراء هذا المنتج مواصلة مهمتنا المتمثلة في إحياء الحرف المحلية واستدامتها وتمكين مجتمعاتهم.',
        productArabicInstruction:`تنظيف جاف - غسيل يدوي بالماء البارد - بدون مجفف`,
        productGermanContent:`Unser Kelim beseht aus handgewebter ägyptischer Wolle, die zu 100 % handgefertigt is. Dieses Stück sammt aus un-serer geometrischen Sammlung, daher war es wichtig, den traditionellen Kelims Tribut zu zollen, die Assiut-Kuns-thandwerker herzusellen gewohnt waren. Die Designs dieser Kollektion aktualisierten sie, indem sie die Menge der ver-wendeten Farben reduzierten und die Formen wiederholten, um einheitlichere Muser zu schafen und ein Gefühl von Modernität zu vermitteln.  Die dieses Produkt hergesellt haben, verdienen faire Löhne und bewahren das ägyptische Kulturerbe, indem sie ein Handwerk ausüben, das ihnen von Generation zu Generation weitergegeben wurde.
        `,
        productGermanInstruction:`Chemische Reinigung – Handwäsche mit kaltem Wasser – kein Trockner
        `,
        productImage:"./images/cart 2.png",
        productName:`Balochy Wool Handmade Kilim
        `,
        productContent:`Our  Kilim is hand-loomed Egyptian Wool which is all 100% handmade. This piece comes from our geometric collection, so it was important that tribute was given to the traditional kilims that Assiut artisans were accus-tomed to crafting. The designs from this collection updated them by reducing the amount of colors used, as well as repeating the shapes to create more uniform patterns to add a sense of modernity. The artisans who made this product are making fair wages and preserving Egyptian cultural heritage by practicing a craft that has been passed down to them generation to generation.
        `,
        productInstruction:`Dry clean - cold water hand wash - no dryer`,
        productSize:`70x120`,
        productPrice:`570.00`
    }
    Product.push(item)
    localStorage.setItem("beeeb",JSON.stringify(Product))
})

thirdItem.addEventListener("click",()=>
{
    let item=
    {
        productArabicName:`كليم هرسين صوف يدوي `,
        productArabicContent:`الكليم الخاص بنا هو صوف مصري منسوج يدويًا مصنوع يدويًا 100٪. علق مصري  مفرشا ملون ساطع على نافذة الفنان الفرنسي الشهير هنري ماتيس. و من حبه للمنسوجات ، وتحديداً هذا التصميم ، عبارة عن كولاج زخرفي من شظايا القماش المخيطة معًا. التي أصبحت أيقونات لفن القرن العشرين من خلال هذه المجموعة. 
        يحقق الحرفيون الذين صنعوا هذا المنتج أجورًا عادلة ويحافظون على التراث الثقافي المصري من خلال ممارسة حرفة انتقلت إليهم من جيل إلى جيل. يتيح لنا شراء هذا المنتج مواصلة مهمتنا المتمثلة في إحياء الحرف المحلية واستدامتها وتمكين مجتمعاتهم.`,
        productArabicInstruction:`تنظيف جاف - غسيل يدوي بالماء البارد - بدون مجفف`,
        productGermanContent:`Unser Kelim beseht aus handgewebter ägyptischer Wolle, die zu 100 % handgefertigt is. Dieses Stück sammt aus un-serer geometrischen Sammlung, daher war es wichtig, den traditionellen Kelims Tribut zu zollen, die Assiut-Kuns-thandwerker herzusellen gewohnt waren. Die Designs dieser Kollektion aktualisierten sie, indem sie die Menge der ver-wendeten Farben reduzierten und die Formen wiederholten, um einheitlichere Muser zu schafen und ein Gefühl von Modernität zu vermitteln.  Die dieses Produkt hergesellt haben, verdienen faire Löhne und bewahren das ägyptische Kulturerbe, indem sie ein Handwerk ausüben, das ihnen von Generation zu Generation weitergegeben wurde.
        `,
        productGermanInstruction:`Chemische Reinigung – Handwäsche mit kaltem Wasser – kein Trockner
        `,
        productImage:"./images/cart 3.png",
        productName:`Hersyen Wool Handmade Kilim
        `,
        productContent:`Unser Kelim beseht aus handgewebter ägyptischer Wolle, die zu 100 % handgefertigt is. Ein farbenfroher Ägypter hing leuchtend am Fenser des berühmten französischen Künslers Henri Matisse. Seine Liebe zu Textilien und insbe-sondere zu diesem Design, einer dekorativen Collage aus zusammengenähten Stoffragmenten. Die durch diese Sam-mlung  zu Ikonen der Kuns des 20. Jahrhunderts wurden. Die Handwerker, die dieses Produkt hergesellt haben, verdi-enen faire Löhne und bewahren das ägyptische Kulturerbe, indem sie ein Handwerk ausüben, das ihnen von Genera-tion zu Generation weitergegeben wurde. Der Kauf dieses Produkts ermöglicht es uns, unsere Mission.
        `,
        productInstruction:`Dry clean - cold water hand wash - no dryer`,
        productSize:`70x145`,
        productPrice:`795.00`
    }
    Product.push(item)
    localStorage.setItem("beeeb",JSON.stringify(Product))    
})

forthItem.addEventListener("click",()=>
{
    console.log("kdjfkdjfk")
    let item=
    {
        productArabicName:`كليم قشقاي صوف يدوي `,
        productArabicContent:`الكليم الخاص بنا هو صوف مصري منسوج يدويًا مصنوع يدويًا 100٪. تأتي هذه القطعة من مجموعتنا في صعيد مصر كتقدير لهذه المنطقة حيث تقع فيها أسيوط. هذا على شكل مثلث ، ولهذا السبب كان المثلث هو عنصر التصميم الرئيسي المستخدم فيه. تم التلاعب بالشكل لإنشاء زخارف تقليدية. يحقق الحرفيون الذين صنعوا هذا المنتج أجورًا عادلة ويحافظون على التراث الثقافي المصري من خلال ممارسة حرفة انتقلت إليهم من جيل إلى جيل. يتيح لنا شراء هذا المنتج مواصلة مهمتنا المتمثلة في إحياء الحرف المحلية واستدامتها وتمكين مجتمعاتهم.`,
        productArabicInstruction:`تنظيف جاف - غسيل يدوي بالماء البارد - بدون مجفف`,
        productGermanContent:`Unser Kelim beseht aus handgewebter ägyptischer Wolle, die zu 100 % handgefertigt is. Dieses Stück sammt aus un-serer Oberägypten-Kollektion und wurde als Hommage an diese Region hergesellt, in der sich unser geliebtes Dorf Assiut befndet. Es hat die Form eines Dreiecks. Aus diesem Grund war das Dreieck das wichtigse Gesaltungselement. Die Form wurde manipuliert, um traditionelle Motive zu schafen. Der Kauf dieses Produkts ermöglicht es uns, unsere Mission fortzusetzen, das lokale Handwerk wiederzubeleben und zu erhalten und ihre Gemeinden zu särken. Die Handwerker, die dieses Produkt hergesellt haben, verdienen faire Löhne und bewahren die ägyptische Kultur.`,
        productGermanInstruction:`Chemische Reinigung – Handwäsche mit kaltem Wasser – kein Trockner
        `,
        productArabicSize:`٧٠×١٤٥`,
        productImage:"./images/cart 4.png",
        productName:`Qashqai Wool Handmade Kilim
        `,
        productContent:`Our  Kilim is hand-loomed Egyptian Wool which is all 100% handmade. This piece comes from our upper Egypt collection which was made as a tribute to this region where our beloved village of Assiut is located. That is shaped like a triangle, for this reason the triangle was the main design element used in. The form was manipulated to create traditional motifs. Purchasing this product allows us to continue our mission of reviv-ing and susaining local crafts and empowering their communities. The artisans who made this product are making fair wages and preserving Egyptian cultural.
        `,
        productInstruction:`Dry clean - cold water hand wash - no dryer`,
        productSize:`70x135`,
        productPrice:`635.00 `
    }
    Product.push(item)
    localStorage.setItem("beeeb",JSON.stringify(Product))  
})
