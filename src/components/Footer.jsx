import React from 'react'
import '../css/footer.css'

function Footer() {
  return (
    <footer id='footer' className='footer'>
        <div className="copyright">
            &copy;{' '}
            <strong>
                <span>NiceAdmin</span>
            </strong>
            . All Rights Reserved
        </div>
        <div className="credits">
            Designed by <span>Alex M</span>
        </div>
    </footer>
  )
}

export default Footer
