"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const {mongoose} = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "userId": "65343222b67e9681f937f001",
    "token": "...tokenKey..."
  }
  /* ------------------------------------------------------- */
  // Token Model:

  const TokenSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Personnel", //user
        required:true,
        index:true
    },
    token:{
        
    }
  },
    {
        collection:"tokens",
        timestamps:true
    })