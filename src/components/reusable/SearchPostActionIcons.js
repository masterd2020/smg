import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PrintIcon from '@mui/icons-material/Print';
import EmailIcon from '@mui/icons-material/Email';

const SearchPostActionIcons = () => {
  return (
    <div className="lg:flex lg:gap-6 lg:items-center lg:text-gray-400">
      <div className='lg:text-black lg:font-bold'>1-50 of 21 records</div>
      <EmailIcon />
      <PrintIcon />
      <InsertDriveFileIcon />
      <DoDisturbIcon />
    </div>
  )
}

export default SearchPostActionIcons;