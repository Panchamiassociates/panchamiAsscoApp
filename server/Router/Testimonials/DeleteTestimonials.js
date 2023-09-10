const Testimonial  = require('../../Model/Testimonial')


module.exports = DeleteTestimonials = async (req, res) => {
    try {
      const testimonialId = req.params.id;
  
      // Check if the testimonial with the provided ID exists
      const existingTestimonial = await Testimonial.findByIdAndDelete(testimonialId);
      if (!existingTestimonial) {
        return res.status(404).json({
          message: 'Testimonial not found',
        });
      }
  
      res.status(200).json({
        message: 'Testimonial deleted successfully',
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: 'Internal server error while deleting testimonial',
      });
    }
  }