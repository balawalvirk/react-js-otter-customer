import React from 'react';
import ProgressIndicator from './ProgressIndicator';
import appleIcon from '../assets/icons/a.png';
import googleIcon from '../assets/icons/g.png';
import klarnaIcon from '../assets/icons/k.png';
import afterpayIcon from '../assets/icons/After.png';
import cardIcon from '../assets/icons/card.png';
import './PaymentScreen.css';

const PaymentScreen = ({ onContinue }) => {
	return (
		<div className="payment-container">
			<ProgressIndicator currentStep={3} />
			<div className="form-section">
				<div className="payment-card">
					<h1 className="payment-title">Payment Method</h1>

					<div className="row two">
						<button className="ghost">
							<img src={appleIcon} alt="Apple" width="20" height="20" />
							Apple Pay
						</button>
						<button className="ghost">
							<img src={googleIcon} alt="Google" width="20" height="20" />
							Google Pay
						</button>
					</div>

					<div className="row two">
						<button className="ghost">
							<img src={klarnaIcon} alt="Klarna" width="20" height="20" />
							Klarna
						</button>
						<button className="ghost">
							<img src={afterpayIcon} alt="AfterPay" width="20" height="20" />
							AfterPay
						</button>
					</div>

					<div className="sep">
						<div className="line" />
						<span>or</span>
						<div className="line" />
					</div>

					<button className="ghost full disabled" style={{fontSize:14,fontWeight:'bold',alignSelf:'center',alignItems:'center',justifyContent:'center',color:'black'}} >Add Bank Account</button>

					<div className="grid two">
						<label className="field">
							<span>Card Number</span>
							<div className="input-with-icon">
								<img src={cardIcon} alt="Card" width="16" height="16" className="input-icon" />
								<input placeholder="1234 5678 9012 3456" />
							</div>
						</label>
						<label className="field">
							<span>CVV</span>
							<input  placeholder="MM/YY" />
						</label>
					</div>

					<div className="grid three">
						<label className="field"><span>Month</span><input placeholder="MM" /></label>
						<label className="field"><span>Year</span><input placeholder="YY" /></label>
						<label className="field"><span>CVV</span><input placeholder="123" /></label>
					</div>

					<label className="field"><span>Cardholder Name</span><input placeholder="John Doe" /></label>

					<div className="actions">
						<button className="primary" onClick={onContinue}>Continue
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentScreen;