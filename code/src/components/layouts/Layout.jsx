




// import React from 'react';
// import Header from './Header'; 
// import  Footer  from './Footer';


// export const Layout = ({ children }) => {
//   return (
//     <>
//       <Header />
//       <div>{children}</div>
//       <Footer/>

    
//     </>
//   );
// };






import React from 'react';

import Header from './Header'; 
import Footer from './Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      
      {/* Main content with optional padding */}
      <main style={{ padding: '1rem 2rem', minHeight: '80vh' }}>
        {children}
      </main>

      <Footer />
    </>
  );
};




