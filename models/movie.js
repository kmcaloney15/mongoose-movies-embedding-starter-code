var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const reviewSchema = new Schema ({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
},
{timestamps: true},
)



var movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    default: function () {
      return new Date().getFullYear();
    }
  }, mpaaRating: String,
  cast: [String],
  nowShowing: { type: Boolean, default: false }, 
  reviews: [reviewSchema],
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);