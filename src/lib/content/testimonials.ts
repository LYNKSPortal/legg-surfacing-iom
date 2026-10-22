export type Testimonial = {
  quote: string;
  author: string;
  location?: string;
  source?: string;
};

/**
 * Genuine public mentions and shout-outs for LEGG Surfacing Ltd, sourced
 * from the LEGG Surfacing Ltd Facebook page (facebook.com/leggsurfacing).
 * Quotes are lightly trimmed for length/readability but not altered in
 * meaning. No reviews have been fabricated. Add further genuine,
 * verified reviews here as they become available.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "A huge thank you to LEGG Surfacing Ltd for the wonderful, professional job they have done in installing the new play equipment and resurfacing our playground. They've done an amazing job and we are so grateful.",
    author: "Marown Memorial Playing Fields",
    source: "Facebook",
  },
  {
    quote:
      "Massive shout out to LEGG Surfacing Ltd who resurfaced our outside seating area with a resin — I'm sure you will agree with us that it looks amazing. Thank you so much Thomas and all your crew.",
    author: "The Central – Free House",
    source: "Facebook",
  },
  {
    quote:
      "A huge shout out to Tom and the gang from LEGG Surfacing Ltd who have been helping us complete the main hardstanding for the storage yard. Thanks guys, can't wait to repay the generosity.",
    author: "The Manx Viking Project",
    source: "Facebook",
  },
];
