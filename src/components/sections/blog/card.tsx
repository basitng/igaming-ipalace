import { Button, Typography } from "@mui/material";
import React from "react";

const BlogCard = ({ title, author, date, image, excerpt }: any) => {
  return (
    <div className="max-w-md mx-auto bg-slate-800 shadow-md rounded-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <Typography className="text-xl font-semibold mb-2 text-white">
          {title}
        </Typography>
        <Typography className="text-gray-500 text-sm mb-2">
          By {author} | {date}
        </Typography>
        <Typography className="text-gray-400">{excerpt}</Typography>
        <Button variant="outlined" className="my-3">
          Read more
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
