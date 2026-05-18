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
    id: 'money-memo',
    name: {
      ja: 'おかねメモ',
      en: 'Money Memo',
    },
    description: {
      ja: '家計簿が続かなかった人へ。カテゴリ分けなし、残高表示なし。まずは“記録を続けること”を大切にした、シンプルなお金メモです。',
      en: 'For those who couldn\'t keep up with budgeting. No categories, no balance display. A simple money memo prioritizing "continuing to record".',
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
    iconUrl: '/images/icon_ios.webp',
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
      ja: `子どもにお小遣いを渡すようになり、あわせてお小遣い帳の付け方も教えました。
「入金 − 出金 = 残高」。手元のお金と同じだね、と。
算数の勉強にもなり、とても良い習慣です。

しかし、我が家の子どもはADHD傾向。
まず、毎回きちんと記録を続けることが難しい。
そして一度でも付け忘れると、次に記録したときには残高が合わなくなります。

「だいたいでいいから続けてみよう」と声をかけても、
「合っていない」という事実がストレスになり、だんだんと手が止まっていきました。

けれど、本当に大切なのは残高をぴったり合わせることではありません。
どれくらい使ったのか、使いすぎていないか。
それを把握することのほうが、ずっと大事です。

だからこのアプリでは、あえて残高を表示しない設計にしました。
目的はあくまで「記録を続けること」。

さらに、ADHDの特性として「楽しさ」や「刺激」も欠かせません。
無理なく続けられるよう、書くこと自体が楽しくなる工夫も取り入れています。

苦手をがんばりで乗り越えるのではなく、続けられる形に変える。
そのために生まれたのが「おかねメモ」です。`,
      en: `When I started giving my child an allowance, I also taught them how to keep track of it in a ledger.
"Income - Expenses = Balance." I explained that it's just like the actual money they have.
It's a great habit that also helps with their math skills.

However, our child has ADHD tendencies.
First, consistently keeping a record every single time is a challenge.
And if they forget to record even once, the balance won't match the next time they try.

Even when I encouraged them, saying, "Just rough estimates are fine, let's keep going,"
the simple fact that "it doesn't match" became a source of stress, and they gradually stopped writing.

But what's truly important isn't getting the balance to match perfectly.
How much did I spend? Am I spending too much?
Understanding those aspects is much more crucial.

That's why we deliberately designed this app not to display the balance.
The sole objective is simply "to continue recording."

Furthermore, "fun" and "stimulation" are essential for children with ADHD.
To make it easy to stick with, we've incorporated features that make the act of writing itself enjoyable.

Instead of trying to overcome weaknesses through sheer effort, we changed it into a format that can be easily continued.
That is why "Money Memo" was born.`,
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
