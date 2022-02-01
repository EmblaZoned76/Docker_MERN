const mongoose = require("mongoose");
const slugify = require("slugify");

const BookSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:[true],
            unique:true,
            trim: true,
            maxlength:50,
        },
        slug: String,
        published:{
            type: Boolean, default:false
        },
        subtitle:{
            type:String,
            required:[true],
            unique:true,
            trim: true,
            maxlength:50,
        },
        author:{
            type:String,
            required:true,
            trim:true,
        },
        isbn:{
            type:String,
            required:true,
            trim:true,
            maxlength:13,
        },
    },
    {
        timestamps:true,
    }
);

BookSchema.pre("save", function(next){
    this.slug = slugify(this.title, {lower:true});
    next();
})

module.exports = mongoose.model("Book", BookSchema);