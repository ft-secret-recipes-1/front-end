import { Button } from 'react-bootstrap'

const FormButton = props => {
  const { buttonType } = props
	
	const buttonText = () => {
		if (buttonType === 'add') {
			return 'Add'
		} else if (buttonType === 'edit') {
			return 'Edit'
		}
	}

	const buttonFunc = () => {
		if (buttonType === 'add') {
			return (ev) => {

			};
		} else if (buttonType === 'edit') {
			return (ev) => {

			};
		}
	}

  return (
    <Button style={{ marginTop: '5%' }} className='btn btn-light' onClick={buttonFunc}>
      {buttonText()}
    </Button>
  )
}

export default FormButton;
