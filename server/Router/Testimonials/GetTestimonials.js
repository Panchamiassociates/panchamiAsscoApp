const Testimonial  = require('../../Model/Testimonial')

module.exports = GetTestimonials = async (req, res) => {
    try {
      const testimonials = await Testimonial.find().limit(6);
      if (testimonials.length === 0) {
        return res.status(404).json({
          message: 'No testimonials found.',
        });
      }
      res.status(200).json({
        message: 'Testimonials fetched successfully',
        data: testimonials,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: 'Internal server error while fetching testimonials',
      });
    }
  }