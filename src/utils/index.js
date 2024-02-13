import slugify from "slugify";

export const slugFunction = (slug) => {
  const result = slugify(slug, {
    replacement: "-",
    lower: true,
    strict: true,
  });

  return result;
};
