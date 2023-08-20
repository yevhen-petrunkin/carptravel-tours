import { TextAlignT } from "@/types";

interface IParagraphProps {
  size: string[];
  line: number[];
  highlight?: string;
  content: string;
  align?: TextAlignT[];
}

export default IParagraphProps;
