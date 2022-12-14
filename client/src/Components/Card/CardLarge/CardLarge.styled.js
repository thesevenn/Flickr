import styled from "styled-components";

import { breakpoints, colors, FlexCol, FlexRow, fontSize, gap, radius, weight } from "../../_shared.styled";

export const CardLargeStyled = styled.div`
 ${FlexRow};
 justify-content:flex-start;
 width:min(106rem,90vw);
 border-radius:${radius.strong};
 margin:${gap.l};
 margin-block-end: ${gap.xl};
 box-shadow:4px 8px 8px #0000001a,
              0 -1px 4px #0000001a;

    @media screen and (max-width:${breakpoints.mobile}){
        ${FlexCol};
        margin-inline: 0;
        margin-block:${gap.m}

        & img {
            border-radius:1.6rem;
            aspect-ratio: 1/1;
            max-height:15rem;
            width:15rem;
            padding:${gap.m};
        }
    }

    & > div {
        ${FlexCol}
        padding-block:${gap.l};
        padding-left: ${gap.l};
        padding-right: ${gap.m};
        justify-content: center;

     & > h2 {
        font-size: ${fontSize.subheading};
        font-weight:${weight.semiBold};
        margin-bottom: ${gap.s};
    }

    & > h3 {
        font-size: ${fontSize.text};
        font-weight: ${weight.medium};
        margin-bottom: ${gap.l};
    }

    & > p {
        font-size: ${fontSize.em};
        font-weight: ${weight.text};
        color:${colors.mutedBlackColor};
        max-width:72ch;
    }
}
`

export const ThumbnailLarge = styled.img`
max-height:18rem;
max-width:12rem;
height:18rem;
border-top-left-radius:${radius.strong};
border-bottom-left-radius:${radius.strong};
background-color:#ccc5;

@media screen and (max-width:${breakpoints.mobile}){
            border-radius:1rem;
            aspect-ratio: 1/1;
            max-height:15rem;
            width:15rem;
            margin:${gap.m};
    }
`