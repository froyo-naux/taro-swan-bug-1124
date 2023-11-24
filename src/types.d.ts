import { VocabScheduleEnum } from './constants/enum';
import { IVocabData } from './services/study';

export type IUserInfo = {
  id: string;
  id_int: string;
  is_staff: number;
  avatar_url: string;
  nickname: string;
  gender: string;
  created_at: string;
};

export interface IPagination<T = any> {
  objects: T[];
  page: number;
  ipp: number;
  total: number;
}

export type IUserNote = {
  id: string;
  vocab_note: {
    id: string;
    user_id: string;
    content: string;
    vocab_id: string;
    remark: string;
  };
};

export type INote = {
  id: string;
  vocab_id: string;
  content: string;
  user_id: string;
};

export type IVocabSense = {
  comment: string;
  vocabulary_id: string;
  word: string;
  vocab_type: string;
  sound: {
    ipa_us: string;
    audio_us_urls: string[];
  };
  senses: Array<{
    id: string;
    definition_cn: string;
    dictionary_id: string;
    pos: string;
  }>;
};

interface IVocabItemBase {
  item_id: string;
  failed_count: number;
  schedule: VocabScheduleEnum;
  itemType: 'a' | 'c';
  isSimple?: boolean;
}

export type IAVocabItem = IVocabItemBase;
export type ICVocabItem = IVocabItemBase & { updated_at: string };
export type IVocabItem = IAVocabItem | ICVocabItem;

export interface IVocabKnown {
  item_id: string;
  retention: number;
}

export interface IPutItemsItemBase {
  failed_count: number;
  item_id: string;
}

type IPutItemsNotFinishedItem = IPutItemsItemBase & { schedule: number; updated_at?: string };
type IPutItemsFinishedItem = IPutItemsItemBase;

export interface IPutItemsData {
  a_items: IPutItemsNotFinishedItem[];
  c_items: IPutItemsNotFinishedItem[];
  a_items_known: IPutItemsFinishedItem[];
  c_items_known: IPutItemsFinishedItem[];
  date: string;
  learning_time: number;
}

export interface IStudyItem {
  a_not_finished_items: IVocabItem[];
  a_finished_items: IVocabItem[];
  c_not_finished_items: IVocabItem[];
  c_finished_items: IVocabItem[];
  date: string;
  learning_time: number;
}

export interface IStudyStore {
  status: any;
  studyItem: any;
  groupVocabsDetailMap: { [key: string]: IVocabData | null };

  // getter
  currentVocab: IVocabItem | null;

  initStudyItems(bookId: string): Promise<any>;
  initStudyData(options: any): Promise<any>;
  exitStudy(): void;
  syncVocabItems(): Promise<any>;
  updateStudyVocab(vocab: IVocabItem, update: any): void;
  increaseLearningTime(second: number): void;
  afterStudyVocab(prevStatus: VocabScheduleEnum): void;
  getUserBookStatus(bookId: string): Promise<any>;
  triggerNextTurn(bookId: string): Promise<any>;
}

export interface ILearningStatus {
  a_count: number;
  a_finished_count: number;
  c_count: number;
  c_finished_count: number;
  can_init_next_turn: boolean;
  date: string;
  is_finished: boolean;
  learning_time: number;
  turn_count: number;
}

export interface IBook {
  id: string;
  name: string;
  description: string;
  dictionary_id: string;
  materialbook_itemlist_id: string;
  total_count: number;
  status: number;
  book_type: number;
  coins: number;
  use_ext_example: boolean;
  ext_example_name: string;
  oc_item_id: string;
  note: string | null;
  intro: string[];
  icon_url: string;
  icon_urls: string[];
}

export interface IGetItemsResponse {
  a_not_finished_items: IVocabItem[];
  c_not_finished_items: IVocabItem[];
  date: string;
  learning_time: number;
}

export type IUserFinishedMaterialBook = {
  finished_at: string;
  material_book_id: string;
  user_id: string;
  material_book: IBook;
};

export type IUserDeskInfo = {
  capacity: number;
  user_material_books_total: number;
};
