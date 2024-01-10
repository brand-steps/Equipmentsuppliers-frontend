import React from 'react';

const Maps = () => {





  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    
    justifyContent: 'center',
    padding: '20px',
    width: '1100px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };



  return (
    <div className='flex  justify-evenly flex-wrap my-4' >
      <div style={containerStyle}>
        <h1 className='font-bold text-3xl mb-6'>Our Location</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.2007374147984!2d0.056684399999999996!3d50.790388300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df7d62f35c9233%3A0x94ff9f694311fb04!2sEquipment%20Suppliers!5e0!3m2!1sen!2s!4v1701700795025!5m2!1sen!2s" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>



      
    </div>
  );
}

export default Maps;
