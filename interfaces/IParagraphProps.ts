import { TextAlignT } from "@/types/TextAlignT";

export interface IParagraphProps {
  size: string[];
  line: number[];
  highlight?: string;
  content: string;
  align?: TextAlignT[];
}
