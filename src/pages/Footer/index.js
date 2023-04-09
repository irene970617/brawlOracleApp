import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';


function FooterComponent() {
  return (
      <MDBFooter className='text-center mt-5' color='white'  >
        <MDBContainer className='p-3 ' style={{ backgroundColor: '#222831' }}>
          <section className='mb-4'>
            {/* <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn> */}

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            {/* <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='google' />
            </MDBBtn> */}

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>

          <section className='mb-2' style={{ fontSize: 20 }}>
            <p>
              Welcome to contact us!
            </p>
          </section>


          <div className='text-center p-3' style={{ backgroundColor: '#393e46', letterSpacing: 1.2 }}>
            © 2023 Copyright :
            <a className='text-white' href='/'>
              BrawlOracle
            </a>
          </div>

        </MDBContainer>
      </MDBFooter>
  );
}
export default FooterComponent;