'use client'

import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
//import { useLightboxProps } from "yet-another-react-lightbox";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
//import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
//import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
//import Counter from "yet-another-react-lightbox/plugins/counter";
import Share from "yet-another-react-lightbox/plugins/share";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";

import slides from "../data/slides";

//import { Paragraph } from "@/components";

interface SubmissionImage {
  url: string;
}
interface Submission {
  name: string;
  text: string;
  submissionImage: SubmissionImage;
}
interface YetGalleryProps {
  submissions: Submission[];
  //slidesPerViewCount: number;
}

type ImageLoaderParams = {
  src: string;
  width: number | string;
  quality?: number | string;
}

const imageLoader = ({ src, width, quality }: ImageLoaderParams) => {
  return `${src}?w=${width}&q=${quality || 75}`;
}

//export default function YetGallery() {
const YetGallery: React.FC<YetGalleryProps> = ({ submissions }) => {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex = ({ index: current }: { index: number }) => {
    setIndex(current);
  }

  //const { carousel, render } = useLightboxProps();

  return (
    <>
      <Lightbox
        className="scene-gallery-lightbox"
        index={index}
        slides={slides}
        plugins={[Inline, Fullscreen, Slideshow, Share]}
        on={{
          view: updateIndex,
          click: toggleOpen(true),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "contain",
        }}
        inline={{
          style: {
            width: "100%",
            maxWidth: "1080px",
            aspectRatio: "3 / 1",
            margin: "0 auto",
          },
        }}
      />

      <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={slides}
        on={{ view: updateIndex }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />
    </>
  );
}

export default YetGallery
