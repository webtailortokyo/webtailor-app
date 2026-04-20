export interface AppInfo {
  id: string;
  name: {
    ja: string;
    en: string;
  };
  description: {
    ja: string;
    en: string;
  };
  features: {
    ja: string[];
    en: string[];
  };
  iconUrl: string;
  screenshotUrls: string[];
  storeLinks: {
    appStore?: string;
    googlePlay?: string;
  };
  story?: {
    ja: string;
    en: string;
  };
  usage?: {
    ja: { step: string; description: string; imageUrl: string }[];
    en: { step: string; description: string; imageUrl: string }[];
  };
  qa?: {
    ja: { question: string; answer: string }[];
    en: { question: string; answer: string }[];
  };
}

export const apps: AppInfo[] = [
  {
    id: 'okane-memo',
    name: {
      ja: 'おかねメモ',
      en: 'MoneyMemo',
    },
    description: {
      ja: 'ADHDの子でも使いやすい、とってもシンプルなお小遣い帳アプリです。',
      en: 'A simple pocket money tracker designed for children with ADHD.',
    },
    features: {
      ja: [
        '一瞬で記録できる',
        '分ける必要がないからラク',
        'やる気が出るメッセージが出るよ',
      ],
      en: [
        'One-tap entry',
        'No categories needed',
        'Enthusiastic messages keep you going',
      ],
    },
    iconUrl: '/images/app_icon_sq2x.webp',
    screenshotUrls: [
      '/images/screen-main.webp',
      '/images/screen-input-keyboard.webp',
      '/images/screen-milestone-3days.webp',
      '/images/screen-usecase-oshi.webp',
      '/images/screen-stats.webp',
    ],
    storeLinks: {
      appStore: '#',
      googlePlay: '#',
    },
    story: {
      ja: 'ADHDの我が子のために、お小遣い帳をつけてほしくて作りました。本物のお金と1円でもズレるとイヤになってやめてしまう特性に合わせて、あえて「いくら残っているか（残高）」は見せずに、「書くこと」を楽しめるように工夫しています。',
      en: 'Created for my child with ADHD who struggled with traditional pocket money books. Since even a tiny mismatch in balance can be discouraging, we focused entirely on the fun of "recording" rather than tracking every penny.',
    },
    usage: {
      ja: [
        { step: '1', description: 'アプリを起動する', imageUrl: '/images/screen-welcome.webp' },
        { step: '2', description: '金額を入力する', imageUrl: '/images/screen-input-keyboard.webp' },
        { step: '3', description: '保存ボタンを押す', imageUrl: '/images/screen-main.webp' },
      ],
      en: [
        { step: '1', description: 'Open the app', imageUrl: '/images/screen-welcome.webp' },
        { step: '2', description: 'Enter the amount', imageUrl: '/images/screen-input-keyboard.webp' },
        { step: '3', description: 'Tap save', imageUrl: '/images/screen-main.webp' },
      ],
    },
    qa: {
      ja: [
        { question: 'なぜ「のこりのおかね（残高）」が出ないの？', answer: 'ADHDの子は、自分のお財布の中身とアプリの数字が少しでもズレると、それがストレスになって書くのをやめてしまうことが多いからです。あえて見せないことで、「書くこと」を習慣にできるようにしています。' },
        { question: '食べ物とか遊びとか、分けて記録できる？', answer: '書くのをラクにするために、分ける機能はあえてつけていません。「ランチのおかねだけ」「ゲームのおかねだけ」など、一つのことに絞って使うのがおすすめです。' },
        { question: '本当にお金はかからないの？', answer: 'はい、ずっと無料です。広告も一切出ないので、安心してお子様に渡してあげてください。' },
      ],
      en: [
        { question: 'Why is there no balance display?', answer: 'For children with ADHD, even a tiny discrepancy can be stressful. We removed it so they can focus on the habit of recording without pressure.' },
        { question: 'Can I use categories?', answer: 'To keep it as simple as possible, there are no categories. We recommend using it for a single purpose, like tracking "lunch money" or "gaming expenses."' },
        { question: 'Is it really free?', answer: 'Yes, it is completely free with no advertisements. Use it with peace of mind.' },
      ],
    },
  },
];
