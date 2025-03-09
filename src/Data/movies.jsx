const movies = [
    {
      id: 1,
      title: "3 Idiots",
      summary: "Two friends embark on a quest to find their long-lost college friend while recalling their student days and the impact he had on their lives.",
      poster: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg"
    },
    {
      id: 2,
      title: "Zindagi Na Milegi Dobara",
      summary: "Three childhood friends reunite for a road trip in Spain that changes their lives forever.",
      poster: "https://upload.wikimedia.org/wikipedia/en/1/17/Zindagi_Na_Milegi_Dobara.jpg"
    },
    {
      id: 3,
      title: "Kabir Singh",
      summary: "A talented but hot-headed surgeon spirals into self-destruction after losing the love of his life.",
      poster: "https://upload.wikimedia.org/wikipedia/en/d/dc/Kabir_Singh.jpg"
    },
    {
      id: 4,
      title: "Dilwale Dulhania Le Jayenge",
      summary: "Raj and Simran, two young Indians living in Britain, fall in love during a trip to Europe. However, Simran's conservative father has other plans.",
      poster: "https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg"
    },
    {
      id: 5,
      title: "Gully Boy",
      summary: "A Mumbai street rapper fights against all odds to follow his passion and make it big in the music industry.",
      poster: "https://upload.wikimedia.org/wikipedia/en/0/07/Gully_Boy_poster.jpg"
    },
    {
      id: 6,
      title: "Dangal",
      summary: "A former wrestler trains his daughters to become world-class wrestlers and break stereotypes.",
      poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg"
    },
    {
      id: 7,
      title: "Chhichhore",
      summary: "A middle-aged man recounts his college days to inspire his suicidal son to embrace life.",
      poster: "https://upload.wikimedia.org/wikipedia/en/3/3d/Chhichhore_Poster.jpg"
    },
    {
      id: 8,
      title: "Bajrangi Bhaijaan",
      summary: "A man with a big heart helps a mute Pakistani girl reunite with her family across the border.",
      poster: "https://upload.wikimedia.org/wikipedia/en/d/dd/Bajrangi_Bhaijaan_Poster.jpg"
    },
    {
      id: 9,
      title: "Tanhaji",
      summary: "A brave Maratha warrior fights to reclaim the Kondhana fort from Mughal forces.",
      poster: "https://upload.wikimedia.org/wikipedia/en/3/3f/Tanaji_film_poster.jpg"
    },
    {
      id: 10,
      title: "Andhadhun",
      summary: "A blind pianist gets entangled in a murder mystery that changes his life forever.",
      poster: "https://upload.wikimedia.org/wikipedia/en/4/47/Andhadhun_poster.jpg"
    },
    {
      id: 11,
        title: "Ek Tha Tiger",
        summary: "An Indian spy falls in love with a Pakistani spy, putting their loyalties to the test.",
        poster: "https://upload.wikimedia.org/wikipedia/en/2/2d/Ek_Tha_Tiger_theatrical_poster.jpg"
    },
    {
      id: 12,
      title: "Shershaah",
      summary: "A biopic on Captain Vikram Batra, an Indian Army officer who sacrificed his life during the Kargil War.",
      poster: "https://upload.wikimedia.org/wikipedia/en/9/91/Shershaah_film_poster.jpg"
    },
    {
      id: 13,
      title: "Drishyam",
      summary: "A common man goes to great lengths to protect his family when they become embroiled in a crime.",
      poster: "https://upload.wikimedia.org/wikipedia/en/9/9e/DrishyamMovie.jpg"
    },
    {
      id: 14,
      title: "PK",
      summary: "An alien stranded on Earth questions human beliefs and customs, bringing about a social revolution.",
      poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg"
    },
    {
      id: 15,
      title: "Raazi",
      summary: "An Indian spy is married into a Pakistani military family to gather intelligence during wartime.",
      poster: "https://upload.wikimedia.org/wikipedia/en/2/2f/Raazi_-_Poster.jpg"
    },
      {
        id: 16,
        title: "Gangubai Kathiawadi",
        summary: "The story of a woman who rises to power in Mumbai’s red-light district.",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/89/Gangubai_Kathiawadi_film_poster.jpg"

      },
      {
        id: 17,
        title: "Pathaan",
        summary: "An exiled spy is called back to stop a terrorist attack on India.",
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg"
      },
      {
        id: 18,
        title: "Brahmāstra: Part One – Shiva",
        summary: "A young man discovers he has divine powers and is part of a great legacy.",
        poster: "https://upload.wikimedia.org/wikipedia/en/e/ea/Brahmastra_Part_One_Shiva.jpg"
      },
      {
        id: 19,
        title: "Drishyam 2",
        summary: "A sequel to Drishyam where Vijay Salgaonkar must protect his family again.",
        poster: "https://upload.wikimedia.org/wikipedia/en/3/3f/Drishyam_2.jpg"
      },
      {
        id: 20,
        title: "Bhool Bhulaiyaa 2",
        summary: "A comedic horror film about a ghostly spirit haunting a palace.",
        poster: "https://upload.wikimedia.org/wikipedia/en/2/23/Bhool_Bhulaiyaa_2_film_poster.jpg"
      },
      {
        id: 21,
        title: "Rocky Aur Rani Kii Prem Kahaani",
        summary: "A love story that brings together two very different families.",
        poster: "https://upload.wikimedia.org/wikipedia/en/6/65/Rocky_Aur_Rani_Ki_Prem_Kahani.jpg"
      },
      {
        id: 22,
        title: "Animal",
        summary: "An action-packed gangster drama exploring complex family dynamics.",
        poster: "https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg"
      },
      {
        id: 23,
        title: "Jawan",
        summary: "A vigilante with a mysterious past fights against corruption.",
        poster: "https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg"
      },
      {
        id: 24,
        title: "Chor Nikal Ke Bhaga",
        summary: "A heist thriller set on an airplane with unexpected twists.",
        poster: "https://upload.wikimedia.org/wikipedia/en/a/a2/Chor_Nikal_Ke_Bhaga_film_poster.jpg"
      },
      {
        id: 25,
        title: "Laxmii",
        summary: "A man gets possessed by a transgender ghost seeking justice.",
        poster: "https://upload.wikimedia.org/wikipedia/en/e/e2/Laxmii_poster.jpg"
      },
      {
        id: 26,
        title: "Dhamaka",
        summary: "A news anchor gets caught in a terrorist attack live on air.",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/80/Dhamaka_film_poster.jpg"
      },
      {
        id: 27,
        title: "Tadap",
        summary: "A passionate love story with twists of betrayal and revenge.",
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c7/Tadap_film_poster.jpg"
      },
      {
        id: 28,
        title: "Bawaal",
        summary: "A couple travels across Europe while confronting their past issues.",
        poster: "https://upload.wikimedia.org/wikipedia/en/b/bb/Bawaal_Official_Poster.jpg"
      },
      {
        id: 29,
        title: "Vikram Vedha",
        summary: "A cop chases a notorious gangster, but things aren’t as simple as they seem.",
        poster: "https://upload.wikimedia.org/wikipedia/en/0/03/Vikram_Vedha_poster.jpg"
      },
      {
        id: 30,
        title: "Shiddat",
        summary: "A romantic drama exploring the power of love and destiny.",
        poster: "https://upload.wikimedia.org/wikipedia/en/5/5e/Shiddat_poster.jpg"
      }
    
    ];
    

  
  export default movies;
  