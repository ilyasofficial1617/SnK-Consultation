
const banners = [
    {
        link : 'https://drive.google.com/drive/folders/1JIjfGWg01HlwLbRa1l0AdMLhTfcYuo_b',
        imageUrl : 'https://drive.google.com/uc?export=download&id=1EN6cQ9FCuMugdGOvHn1tHUJnMIUEhyZk'
    }, 
    {
        link : 'https://drive.google.com/drive/folders/1JIjfGWg01HlwLbRa1l0AdMLhTfcYuo_b',
        imageUrl : 'https://drive.google.com/uc?export=download&id=19MslqBW7e0ph9lEAeA5BNaC1mKqhF5jb'
    }, 
    {
        link : 'https://drive.google.com/drive/folders/1JIjfGWg01HlwLbRa1l0AdMLhTfcYuo_b',
        imageUrl : 'https://drive.google.com/uc?export=download&id=155Su4F1UXJztDeAIcVKZLYgM_5f4G1tB'
    }
]

const doctors = [
    {
      "speciality": "Family Physician",
      "doctor_name": "Tomeka Hebel"
    },
    {
      "speciality": "Internal Medicine Physician",
      "doctor_name": "Noelle Perrotti"
    },
    {
      "speciality": "Pediatrician",
      "doctor_name": "Kimberlie Wingerter"
    },
    {
      "speciality": "Gynecologist",
      "doctor_name": "Kasie Magwood"
    },
    {
      "speciality": "Cardiologist",
      "doctor_name": "Marie Stroman"
    },
    {
      "speciality": "Oncologist",
      "doctor_name": "Thad Quan"
    },
    {
      "speciality": "Gastroenterologist",
      "doctor_name": "Karoline Elkington"
    },
    {
      "speciality": "Pulmonologist",
      "doctor_name": "Chris Mcbath"
    },
    {
      "speciality": "Infectious Disease Physician",
      "doctor_name": "Priscilla Gilfillan"
    },
    {
      "speciality": "Nephrologist",
      "doctor_name": "Doreatha Estridge"
    },
    {
      "speciality": "Endocrinologist",
      "doctor_name": "Delsie Dudding"
    },
    {
      "speciality": "Ophthalmologist",
      "doctor_name": "Gerda Wolf"
    },
    {
      "speciality": "Otolaryngo logist",
      "doctor_name": "Drema Hendrix"
    },
    {
      "speciality": "Dermatologist",
      "doctor_name": "Nisha Gerner"
    },
    {
      "speciality": "Psychiatrist",
      "doctor_name": "Susannah Gravatt"
    },
    {
      "speciality": "Neurologist",
      "doctor_name": "Rusty Butler"
    },
    {
      "speciality": "Radiologist",
      "doctor_name": "Dayna Rolf"
    },
    {
      "speciality": "Anesthesiologist",
      "doctor_name": "Corina Nye"
    },
    {
      "speciality": "Surgeon",
      "doctor_name": "Flossie Fahy"
    },
    {
      "speciality": "Physician Executive",
      "doctor_name": "Nona Alamo"
    },
    {
      "speciality": "Family Physician",
      "doctor_name": "Alphonso Verdugo"
    },
    {
      "speciality": "Internal Medicine Physician",
      "doctor_name": "Sophia Stansell"
    },
    {
      "speciality": "Pediatrician",
      "doctor_name": "Amie Stowell"
    },
    {
      "speciality": "Gynecologist",
      "doctor_name": "Hung Kellough"
    },
    {
      "speciality": "Cardiologist",
      "doctor_name": "Retta Syed"
    },
    {
      "speciality": "Oncologist",
      "doctor_name": "Gabrielle Atienza"
    },
    {
      "speciality": "Gastroenterologist",
      "doctor_name": "Carole Nickel"
    },
    {
      "speciality": "Pulmonologist",
      "doctor_name": "Janet Harper"
    },
    {
      "speciality": "Infectious Disease Physician",
      "doctor_name": "Clarissa Slagle"
    },
    {
      "speciality": "Nephrologist",
      "doctor_name": "Shawna Markum"
    },
    {
      "speciality": "Endocrinologist",
      "doctor_name": "Athena Worden"
    },
    {
      "speciality": "Ophthalmologist",
      "doctor_name": "Andy Nieman"
    },
    {
      "speciality": "Otolaryngo logist",
      "doctor_name": "Tangela Mcadams"
    },
    {
      "speciality": "Dermatologist",
      "doctor_name": "Nery Brewington"
    },
    {
      "speciality": "Psychiatrist",
      "doctor_name": "Jenniffer Winsor"
    },
    {
      "speciality": "Neurologist",
      "doctor_name": "Dale Buttry"
    },
    {
      "speciality": "Radiologist",
      "doctor_name": "Lonna Fancher"
    },
    {
      "speciality": "Anesthesiologist",
      "doctor_name": "Yvonne Hendrie"
    },
    {
      "speciality": "Surgeon",
      "doctor_name": "Mitzie Kiser"
    },
    {
      "speciality": "Physician Executive",
      "doctor_name": "Matilde Denison"
    },
    {
      "speciality": "Family Physician",
      "doctor_name": "Zora Lingerfelt"
    },
    {
      "speciality": "Internal Medicine Physician",
      "doctor_name": "Corazon Paddock"
    },
    {
      "speciality": "Pediatrician",
      "doctor_name": "Casie Sevin"
    },
    {
      "speciality": "Gynecologist",
      "doctor_name": "Tempie Triolo"
    },
    {
      "speciality": "Cardiologist",
      "doctor_name": "Irmgard Cornelius"
    },
    {
      "speciality": "Oncologist",
      "doctor_name": "Liane Burkhard"
    },
    {
      "speciality": "Gastroenterologist",
      "doctor_name": "Betsy Thrailkill"
    },
    {
      "speciality": "Pulmonologist",
      "doctor_name": "Tyler Bankhead"
    },
    {
      "speciality": "Infectious Disease Physician",
      "doctor_name": "Marylouise Alejandre"
    },
    {
      "speciality": "Nephrologist",
      "doctor_name": "Eliseo Donnellan"
    },
    {
      "speciality": "Endocrinologist",
      "doctor_name": "Kristine Widger"
    },
    {
      "speciality": "Ophthalmologist",
      "doctor_name": "Guillermina Gilliard"
    },
    {
      "speciality": "Otolaryngo logist",
      "doctor_name": "Alpha Prideaux"
    },
    {
      "speciality": "Dermatologist",
      "doctor_name": "Gita Basso"
    },
    {
      "speciality": "Psychiatrist",
      "doctor_name": "Lachelle Stoehr"
    },
    {
      "speciality": "Neurologist",
      "doctor_name": "Dyan Mancuso"
    },
    {
      "speciality": "Radiologist",
      "doctor_name": "Delana Claggett"
    },
    {
      "speciality": "Anesthesiologist",
      "doctor_name": "Betty Dilday"
    },
    {
      "speciality": "Surgeon",
      "doctor_name": "Valentine Strohm"
    },
    {
      "speciality": "Physician Executive",
      "doctor_name": "Elanor Mcsween"
    },
    {
      "speciality": "Family Physician",
      "doctor_name": "Shane Bail"
    },
    {
      "speciality": "Internal Medicine Physician",
      "doctor_name": "Basilia Damore"
    },
    {
      "speciality": "Pediatrician",
      "doctor_name": "Marissa Edwards"
    },
    {
      "speciality": "Gynecologist",
      "doctor_name": "Shon Saechao"
    },
    {
      "speciality": "Cardiologist",
      "doctor_name": "Jodie Ooten"
    },
    {
      "speciality": "Oncologist",
      "doctor_name": "Felipa Southward"
    },
    {
      "speciality": "Gastroenterologist",
      "doctor_name": "Lia Merriweather"
    },
    {
      "speciality": "Pulmonologist",
      "doctor_name": "Nick Fahy"
    },
    {
      "speciality": "Infectious Disease Physician",
      "doctor_name": "Katina Patch"
    },
    {
      "speciality": "Nephrologist",
      "doctor_name": "Spring Mcelyea"
    },
    {
      "speciality": "Endocrinologist",
      "doctor_name": "Johnette Blackmore"
    },
    {
      "speciality": "Ophthalmologist",
      "doctor_name": "Hae Duenes"
    },
    {
      "speciality": "Otolaryngo logist",
      "doctor_name": "Lorette Wheeler"
    },
    {
      "speciality": "Dermatologist",
      "doctor_name": "Frederic Rosalez"
    },
    {
      "speciality": "Psychiatrist",
      "doctor_name": "Rodolfo Figueiredo"
    },
    {
      "speciality": "Neurologist",
      "doctor_name": "Tajuana Trenholm"
    },
    {
      "speciality": "Radiologist",
      "doctor_name": "Joane Luby"
    },
    {
      "speciality": "Anesthesiologist",
      "doctor_name": "Carolann Primrose"
    },
    {
      "speciality": "Surgeon",
      "doctor_name": "Towanda Simeone"
    },
    {
      "speciality": "Physician Executive",
      "doctor_name": "Ruben Wragg"
    },
    {
      "speciality": "Family Physician",
      "doctor_name": "Donella Mcguigan"
    },
    {
      "speciality": "Internal Medicine Physician",
      "doctor_name": "Cathie Litchford"
    },
    {
      "speciality": "Pediatrician",
      "doctor_name": "Deonna Varghese"
    },
    {
      "speciality": "Gynecologist",
      "doctor_name": "Odessa Lisby"
    },
    {
      "speciality": "Cardiologist",
      "doctor_name": "Norbert Montez"
    },
    {
      "speciality": "Oncologist",
      "doctor_name": "Estella Albanese"
    },
    {
      "speciality": "Gastroenterologist",
      "doctor_name": "Carole Hoos"
    },
    {
      "speciality": "Pulmonologist",
      "doctor_name": "Yuko Leer"
    },
    {
      "speciality": "Infectious Disease Physician",
      "doctor_name": "Rosamond Rorick"
    },
    {
      "speciality": "Nephrologist",
      "doctor_name": "Roxana Ploss"
    },
    {
      "speciality": "Endocrinologist",
      "doctor_name": "Milagros Berner"
    },
    {
      "speciality": "Ophthalmologist",
      "doctor_name": "Cindy Harward"
    },
    {
      "speciality": "Otolaryngo logist",
      "doctor_name": "Alison Yohe"
    },
    {
      "speciality": "Dermatologist",
      "doctor_name": "Maura Devos"
    },
    {
      "speciality": "Psychiatrist",
      "doctor_name": "Esther Rinke"
    },
    {
      "speciality": "Neurologist",
      "doctor_name": "Bernadette Ismail"
    },
    {
      "speciality": "Radiologist",
      "doctor_name": "Eleonore Groom"
    },
    {
      "speciality": "Anesthesiologist",
      "doctor_name": "Kathleen Dunkel"
    },
    {
      "speciality": "Surgeon",
      "doctor_name": "Tessa Nalls"
    },
    {
      "speciality": "Physician Executive",
      "doctor_name": "Adrien Goetz"
    },
    {
      "speciality": "Family Physician",
      "doctor_name": "Betsy Younker"
    },
    {
      "speciality": "Internal Medicine Physician",
      "doctor_name": "So Asaro"
    },
    {
      "speciality": "Pediatrician",
      "doctor_name": "Tifany Walkins"
    },
    {
      "speciality": "Gynecologist",
      "doctor_name": "Shavonda Obermiller"
    },
    {
      "speciality": "Cardiologist",
      "doctor_name": "Reyes Kessler"
    },
    {
      "speciality": "Oncologist",
      "doctor_name": "Tiny Piland"
    },
    {
      "speciality": "Gastroenterologist",
      "doctor_name": "Beatrice Taff"
    },
    {
      "speciality": "Pulmonologist",
      "doctor_name": "Felice Core"
    },
    {
      "speciality": "Infectious Disease Physician",
      "doctor_name": "Brianna Krum"
    },
    {
      "speciality": "Nephrologist",
      "doctor_name": "Andria Noel"
    },
    {
      "speciality": "Endocrinologist",
      "doctor_name": "Delena Matchett"
    },
    {
      "speciality": "Ophthalmologist",
      "doctor_name": "Shannan Fonville"
    },
    {
      "speciality": "Otolaryngo logist",
      "doctor_name": "Maryrose Pickering"
    },
    {
      "speciality": "Dermatologist",
      "doctor_name": "Claudine Fullilove"
    },
    {
      "speciality": "Psychiatrist",
      "doctor_name": "Celestine Alcon"
    },
    {
      "speciality": "Neurologist",
      "doctor_name": "Deanna Becton"
    },
    {
      "speciality": "Radiologist",
      "doctor_name": "Elena Knick"
    },
    {
      "speciality": "Anesthesiologist",
      "doctor_name": "Lakiesha Benito"
    },
    {
      "speciality": "Surgeon",
      "doctor_name": "Shondra Agarwal"
    },
    {
      "speciality": "Physician Executive",
      "doctor_name": "Chang Gulino"
    },
    {
      "speciality": "Family Physician",
      "doctor_name": "Lecia Heller"
    },
    {
      "speciality": "Internal Medicine Physician",
      "doctor_name": "Kurtis Collyer"
    },
    {
      "speciality": "Pediatrician",
      "doctor_name": "Arianne Sandler"
    },
    {
      "speciality": "Gynecologist",
      "doctor_name": "Letha Vassallo"
    },
    {
      "speciality": "Cardiologist",
      "doctor_name": "Ola Frick"
    },
    {
      "speciality": "Oncologist",
      "doctor_name": "Ralph Lupercio"
    },
    {
      "speciality": "Gastroenterologist",
      "doctor_name": "Laree Callahan"
    },
    {
      "speciality": "Pulmonologist",
      "doctor_name": "Duane Capel"
    },
    {
      "speciality": "Infectious Disease Physician",
      "doctor_name": "Flo Coaxum"
    },
    {
      "speciality": "Nephrologist",
      "doctor_name": "Cara Kasprzak"
    },
    {
      "speciality": "Endocrinologist",
      "doctor_name": "Tracee Hudkins"
    },
    {
      "speciality": "Ophthalmologist",
      "doctor_name": "Zenobia Koepke"
    },
    {
      "speciality": "Otolaryngo logist",
      "doctor_name": "Shila Deveaux"
    },
    {
      "speciality": "Dermatologist",
      "doctor_name": "Audra Escalera"
    },
    {
      "speciality": "Psychiatrist",
      "doctor_name": "Vincent Rearick"
    },
    {
      "speciality": "Neurologist",
      "doctor_name": "Shantelle Nordstrom"
    },
    {
      "speciality": "Radiologist",
      "doctor_name": "Edmundo Behringer"
    },
    {
      "speciality": "Anesthesiologist",
      "doctor_name": "Patrice Salguero"
    },
    {
      "speciality": "Surgeon",
      "doctor_name": "Joy Bake"
    },
    {
      "speciality": "Physician Executive",
      "doctor_name": "Romeo Northington"
    },
    {
      "speciality": "Family Physician",
      "doctor_name": "Walton Bate"
    },
    {
      "speciality": "Internal Medicine Physician",
      "doctor_name": "Lynette Mckeown"
    },
    {
      "speciality": "Pediatrician",
      "doctor_name": "Delsie Pitzer"
    },
    {
      "speciality": "Gynecologist",
      "doctor_name": "Tamiko Honey"
    },
    {
      "speciality": "Cardiologist",
      "doctor_name": "Hollie Tapscott"
    },
    {
      "speciality": "Oncologist",
      "doctor_name": "Zelda Denis"
    },
    {
      "speciality": "Gastroenterologist",
      "doctor_name": "Leora Murdoch"
    },
    {
      "speciality": "Pulmonologist",
      "doctor_name": "Karisa Burritt"
    },
    {
      "speciality": "Infectious Disease Physician",
      "doctor_name": "Myesha Bartolotta"
    },
    {
      "speciality": "Nephrologist",
      "doctor_name": "Alesha Hopping"
    },
    {
      "speciality": "Endocrinologist",
      "doctor_name": "Vashti Lipham"
    },
    {
      "speciality": "Ophthalmologist",
      "doctor_name": "Veda Thayer"
    },
    {
      "speciality": "Otolaryngo logist",
      "doctor_name": "Willetta Rott"
    },
    {
      "speciality": "Dermatologist",
      "doctor_name": "Theresia Mabrey"
    },
    {
      "speciality": "Psychiatrist",
      "doctor_name": "Keva Bailes"
    },
    {
      "speciality": "Neurologist",
      "doctor_name": "Ed Guyette"
    },
    {
      "speciality": "Radiologist",
      "doctor_name": "Sherika Staples"
    },
    {
      "speciality": "Anesthesiologist",
      "doctor_name": "Ardelia Borrero"
    },
    {
      "speciality": "Surgeon",
      "doctor_name": "Bethanie Esterline"
    },
    {
      "speciality": "Physician Executive",
      "doctor_name": "Coral Hatley"
    }
  ]

const sampleData = {banners, doctors}

export default sampleData;