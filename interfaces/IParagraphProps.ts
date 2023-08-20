import { textAlignT } from "@/types";

interface IParagraphProps {
  size: string[];
  line: number[];
  highlight?: string;
  content: string;
  align?: textAlignT[];
}

export default IParagraphProps;
