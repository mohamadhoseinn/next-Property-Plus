const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const fetchProperties = async () => {
  try {
    const response = await fetch(
      ` ${apiDomain}/properties`
      // {
      // ...توجه کن موارد پایین فقط برای فتچ سازگاند و نه اکسیوس یا
      // cache: "no-store"  //  برای کش نکردن و این که هیچ مقداری در فایل سیستم هم ذخیره نمیشه
      // cache: "no-cache"  //  اینه بالا به مروگر مشگه که هی کانتنت یا محتوایی یا مقداری نباید کش بشه  فرقشون ذخیره در فایل سیستم است
      // next: { revalidate: 5 }, //هر پنج ثانیه یکبار ریکوئست بزن
      // }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export { fetchProperties };
