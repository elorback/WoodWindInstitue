export interface Testimonial {
  id: string;
  name: string;
  role: "Student" | "Faculty";
  text: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "max",
    name: "Max",
    role: "Student",
    featured: true,
    text: `Andrew has helped me grow exponentially as both a bassoon player and especially as a person. Musically, he is very focused on the artistic and expressive element, such as the different characters that can be portrayed on an instrument like the bassoon. I feel that this is especially important as it gives the music a human element.

This is not to disregard his focus and vast knowledge on technique. He integrates a variety of practice methods used by world class musicians to help students achieve a level of technique where playing feels effortless. This allows students to shift their focus from executing the right notes to expressing themselves in the music.

On a personal level, studying with Andrew has led to some of the most significant growth I’ve had. Before taking lessons, I was insecure and lacked confidence. Andrew helped me become more comfortable and proud of who I am, improving my confidence, friendships, and overall happiness.`
  },
  {
    id: "esteban",
    name: "Esteban",
    role: "Student",
    text: `Andrew is one of the brightest stars I've ever met. He makes everyone around him better—whether it's playing an instrument or learning how to count to three. He's one of the few people truly making the world a better place.`
  },
  {
    id: "abigail",
    name: "Abigail",
    role: "Student",
    text: `Andrew always explains not just what to practice, but why it matters. He tailors his teaching to how each student learns, hand-picking exercises and repertoire that are genuinely beneficial.

Beyond music, Andrew deeply cares about his students as people. He supported me through personal loss, self-doubt, and major life decisions. Even after I stopped taking lessons, he continues to check in and support me. He has always been one of my greatest supporters.`
  },
  {
    id: "maner",
    name: "Professor Miles Maner",
    role: "Faculty",
    featured: true,
    text: `Andrew Marlin stands out as a teacher because of his tireless energy and dedication. Teaching dozens of students, traveling across the city, arranging and conducting ensembles, mentoring college applications, and connecting students with professional opportunities—none of this is possible without his extraordinary drive.

Equally important is his ability to connect with students. His studio is built on positivity, creativity, trust, and respect. Andrew and his students function as a tight-knit, well-oiled machine powered by his focused energy.`
  },
  {
    id: "roidl-ward",
    name: "Professor Ben Roidl-Ward",
    role: "Faculty",
    text: `Andrew Marlin is an extraordinary teacher whose impact goes far beyond bassoon playing. He helps students grow into confident, engaged individuals while fostering a supportive, collaborative culture.

Whether students pursue music or another path, they leave Andrew’s studio equipped with life skills that will help them succeed in whatever they choose to do.`
  }
];
