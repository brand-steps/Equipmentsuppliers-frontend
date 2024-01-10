
import whatsss from '../../Images/whatsapps.webp';
import './whatsappchat.css';
import { useTranslation } from 'react-i18next'

const Whatsappchat = () => {
  const {t} = useTranslation(["home"]);

  return (
    <div>
  <div id="bottom-banner" tabindex="-1" class="fixed bottom-0 right-0 z-50 flex justify-between p-4 border-gray-200 bg-gray-50 bg-transparent">

    <div class="flex items-center">
       {/* <a href="https://wa.me/+447445953220" className="text-blue-700 hover:text-blue-900">
        <FontAwesomeIcon icon={faWhatsapp} size="3x" />
      </a>
  */}
          <button data-dismiss-target="#bottom-banner" type="button" class="flex-shrink-0 -flex justify-center items-start text-gray-400 text-sm p-1.5  bg-green-500 whatsbtn">

  <a href="https://wa.me/+447445953220" className="text-blue-700 hover:text-blue-900 ">
  <img src={whatsss} alt="whatsapp" className='iconimg inline-block mr-2' />
  <span className='txtss font-bold text-base'>{t("whatsappicon")}</span>
  </a>
  </button>

    </div>
</div>

    </div>
  )
}

export default Whatsappchat