import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useNavigate } from "react-router-dom";

export default function Events() {
  const navigate = new useNavigate();

  return (
    <ImageList sx={{ width: "auto", height: "100%", margin: "5vh" }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            position="bottom"
            onClick={() => {
              navigate(item.link);
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://fiverr-res.cloudinary.com/image/upload/w_1600/f_auto,q_auto/v1/attachments/generic_asset/asset/18dab679d0ea68cf6c6430d77c213230-1664872016381/shutterstock_415922566.jpg",
    title: "Dj.contracter",
    link: "/Dj",
  },

  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Photo shot",
    link: "/Photoshoot",
  },

  {
    img: "https://image.wedmegood.com/resized/1000X/uploads/member/918415/1576500699_Screenshot_from_2019_12_16_14_34_16.png",
    title: "Wedding",
    link: "/Wedding",
  },
  {
    img: "https://static.toiimg.com/thumb/msid-61991436,imgsize-1035463,width-400,resizemode-4/61991436.jpg",
    title: "Transport",
    link: "/Transport",
  },
];
