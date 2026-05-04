export type PetType = 'dog' | 'cat' | 'bird' | 'fish' | 'other';
export type Gender = 'male' | 'female' | 'neutral';
export type Style = 'cute' | 'funny' | 'strong' | 'classic' | 'unique';

export const PET_LABELS: Record<PetType, { label: string; emoji: string }> = {
  dog: { label: 'Cachorro', emoji: '🐶' },
  cat: { label: 'Gato', emoji: '🐱' },
  bird: { label: 'Pássaro', emoji: '🦜' },
  fish: { label: 'Peixe', emoji: '🐠' },
  other: { label: 'Outros', emoji: '🐾' },
};

export const GENDER_LABELS: Record<Gender, string> = {
  male: 'Macho',
  female: 'Fêmea',
  neutral: 'Neutro',
};

export const STYLE_LABELS: Record<Style, { label: string; emoji: string }> = {
  cute: { label: 'Fofo', emoji: '🥰' },
  funny: { label: 'Engraçado', emoji: '😆' },
  strong: { label: 'Forte', emoji: '💪' },
  classic: { label: 'Clássico', emoji: '👑' },
  unique: { label: 'Diferente', emoji: '✨' },
};

type Bank = Record<Style, { male: string[]; female: string[]; neutral: string[] }>;

const empty = (): Bank => ({
  cute: { male: [], female: [], neutral: [] },
  funny: { male: [], female: [], neutral: [] },
  strong: { male: [], female: [], neutral: [] },
  classic: { male: [], female: [], neutral: [] },
  unique: { male: [], female: [], neutral: [] },
});

const dog = empty();
dog.cute.male = ['Pipoca', 'Biscoito', 'Mel', 'Toby', 'Theo', 'Nino', 'Lucky', 'Bento'];
dog.cute.female = ['Lola', 'Mia', 'Nina', 'Bella', 'Luna', 'Maya', 'Aurora', 'Pity'];
dog.cute.neutral = ['Coco', 'Pixel', 'Pluma', 'Bubu', 'Caco'];
dog.funny.male = ['Salsicha', 'Pudim', 'Brigadeiro', 'Cebolinha', 'Nuggets', 'Pão de Queijo'];
dog.funny.female = ['Pamonha', 'Coxinha', 'Pizza', 'Marshmallow', 'Mostarda'];
dog.funny.neutral = ['Tofu', 'Waffle', 'Donut', 'Macarrão', 'Pickles'];
dog.strong.male = ['Thor', 'Zeus', 'Apollo', 'Magnum', 'Rex', 'Hulk', 'Diesel', 'Tank'];
dog.strong.female = ['Athena', 'Xena', 'Valquíria', 'Fúria', 'Sheeva', 'Nyx'];
dog.strong.neutral = ['Titan', 'Blade', 'Storm', 'Onix'];
dog.classic.male = ['Rex', 'Bob', 'Toto', 'Fido', 'Max', 'Buddy', 'Charlie'];
dog.classic.female = ['Lassie', 'Daisy', 'Molly', 'Sasha', 'Princesa', 'Lady'];
dog.classic.neutral = ['Scooby', 'Pongo', 'Snoopy'];
dog.unique.male = ['Zephyr', 'Kael', 'Orion', 'Loki', 'Quasar', 'Atlas'];
dog.unique.female = ['Nyra', 'Selene', 'Indra', 'Azura', 'Lyra'];
dog.unique.neutral = ['Echo', 'Nova', 'Zen', 'Pixel'];

const cat = empty();
cat.cute.male = ['Frajola', 'Simba', 'Felix', 'Tom', 'Nino', 'Pingo', 'Mingau'];
cat.cute.female = ['Mimi', 'Lili', 'Nala', 'Cleo', 'Amora', 'Pérola', 'Belinha'];
cat.cute.neutral = ['Sushi', 'Mochi', 'Tofu', 'Caramelo'];
cat.funny.male = ['Bigode', 'Lasanha', 'Garfield', 'Pickles', 'Croissant'];
cat.funny.female = ['Ravióli', 'Cuscuz', 'Tapioca', 'Cookie'];
cat.funny.neutral = ['Cheetos', 'Nachos', 'Brownie'];
cat.strong.male = ['Salem', 'Loki', 'Bagheera', 'Khan', 'Drako'];
cat.strong.female = ['Hera', 'Shiva', 'Khaleesi', 'Lilith', 'Morgana'];
cat.strong.neutral = ['Shadow', 'Ninja', 'Onyx'];
cat.classic.male = ['Tom', 'Felix', 'Garfield', 'Oliver', 'Chico'];
cat.classic.female = ['Mimi', 'Mia', 'Cleópatra', 'Bibi', 'Frida'];
cat.classic.neutral = ['Whiskers', 'Mittens'];
cat.unique.male = ['Yuki', 'Kuro', 'Ozzy', 'Jinx', 'Neko'];
cat.unique.female = ['Aiko', 'Sora', 'Luna', 'Sable', 'Vega'];
cat.unique.neutral = ['Miso', 'Kombu', 'Pixel'];

const bird = empty();
bird.cute.male = ['Pio', 'Tito', 'Lipe', 'Chico', 'Zé Pequeno'];
bird.cute.female = ['Piu', 'Lila', 'Nina', 'Lilica', 'Kika'];
bird.cute.neutral = ['Sol', 'Nuvem', 'Bibi'];
bird.funny.male = ['Frango', 'Mexerica', 'Pipoco', 'Brócolis'];
bird.funny.female = ['Cenoura', 'Aveia', 'Pipoquinha'];
bird.funny.neutral = ['Tweet', 'Hashtag', 'Emoji'];
bird.strong.male = ['Falcão', 'Apolo', 'Phoenix', 'Hórus'];
bird.strong.female = ['Íris', 'Ísis', 'Athena', 'Fênix'];
bird.strong.neutral = ['Sky', 'Storm', 'Blaze'];
bird.classic.male = ['Louro', 'Curió', 'José', 'Pedrinho'];
bird.classic.female = ['Lóri', 'Maria', 'Dolores'];
bird.classic.neutral = ['Coco'];
bird.unique.male = ['Kairo', 'Ravi', 'Indigo'];
bird.unique.female = ['Ayla', 'Suri', 'Mirra'];
bird.unique.neutral = ['Azul', 'Citrino', 'Âmbar'];

const fish = empty();
fish.cute.male = ['Bubu', 'Nemo', 'Splash', 'Zigue', 'Zequinha'];
fish.cute.female = ['Bolha', 'Marie', 'Coral', 'Pérola'];
fish.cute.neutral = ['Plim', 'Glub', 'Pixel'];
fish.funny.male = ['Sushi', 'Sashimi', 'Filé', 'Tuna'];
fish.funny.female = ['Tilápia', 'Sardinha', 'Anchova'];
fish.funny.neutral = ['Wasabi', 'Salmão'];
fish.strong.male = ['Poseidon', 'Tritão', 'Kraken', 'Netuno'];
fish.strong.female = ['Atlanta', 'Calypso', 'Nereida'];
fish.strong.neutral = ['Tempestade', 'Maré', 'Tsunami'];
fish.classic.male = ['Goldie', 'Bubbles', 'Finn'];
fish.classic.female = ['Dory', 'Marina', 'Coral'];
fish.classic.neutral = ['Aqua', 'Azulão'];
fish.unique.male = ['Koi', 'Reef', 'Indigo'];
fish.unique.female = ['Maris', 'Lyra', 'Iara'];
fish.unique.neutral = ['Tide', 'Lagoa', 'Onda'];

const other = empty();
other.cute.male = ['Pip', 'Toco', 'Nico', 'Bento'];
other.cute.female = ['Lulu', 'Pity', 'Mel', 'Coco'];
other.cute.neutral = ['Tutu', 'Bubu', 'Pluma'];
other.funny.male = ['Pickles', 'Croissant', 'Pretzel'];
other.funny.female = ['Pipoca', 'Tortinha', 'Geleia'];
other.funny.neutral = ['Sushi', 'Tofu'];
other.strong.male = ['Atlas', 'Magnus', 'Rocky'];
other.strong.female = ['Furiosa', 'Athena'];
other.strong.neutral = ['Onyx', 'Storm'];
other.classic.male = ['Bob', 'Max', 'Jack'];
other.classic.female = ['Lily', 'Daisy'];
other.classic.neutral = ['Coco', 'Buddy'];
other.unique.male = ['Quill', 'Zen', 'Kairo'];
other.unique.female = ['Nyx', 'Mira', 'Vega'];
other.unique.neutral = ['Echo', 'Nova'];

export const NAME_BANK: Record<PetType, Bank> = { dog, cat, bird, fish, other };

export function generateNames(opts: {
  pet: PetType;
  gender: Gender;
  styles: Style[];
  count?: number;
}): string[] {
  const { pet, gender, styles, count = 8 } = opts;
  const stylesToUse = styles.length ? styles : (Object.keys(STYLE_LABELS) as Style[]);
  const pool = new Set<string>();
  stylesToUse.forEach((s) => {
    NAME_BANK[pet][s][gender].forEach((n) => pool.add(n));
    if (gender !== 'neutral') NAME_BANK[pet][s].neutral.forEach((n) => pool.add(n));
  });
  const arr = Array.from(pool);
  // shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}
