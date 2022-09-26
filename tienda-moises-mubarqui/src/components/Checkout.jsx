import './Checkout.css';

function Checkout() {
    function onSubmit(evt){
        evt.preventDefault();
    }

    function onChange(evt){
        const { name, value } = evt.taarget
    }
    return(
        <div className='Checkout'>
            <form>

            </form>
        </div>
    )
}

export default Checkout;