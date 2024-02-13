import './account-nav.css';
import SectionBorder from '../SectionBorder/SectionBorder';

function AccountNav() {
    return ( 
        <nav className='account-nav'>
            <SectionBorder />
            <ul className='menu-items'>
                <li className='acc-title acc-text'>My Account</li>
                <li className='acc-donate acc-text button'>Help By Donating</li>
                <li className='acc-ch-pers acc-text'>Change Personal Details</li>
                <li className='acc-ch-pass acc-text'>Change Password</li>
            </ul>
        </nav>
     );
}

export default AccountNav;