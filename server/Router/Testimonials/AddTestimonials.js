const Testimonial  = require('../../Model/Testimonial')


module.exports = AddTestimonials = async (req, res) => {
    try {
      const testimonial = new Testimonial(req.body);
      await testimonial.save();
      res.status(201).json({
        message: 'Testimonial uploaded successfully',
        data: testimonial,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: 'Internal server error while uploading testimonial',
      });
    }
  }