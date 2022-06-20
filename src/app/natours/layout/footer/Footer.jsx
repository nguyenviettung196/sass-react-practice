import React from 'react';
import './_Footer.scss';
import LogoGreen from '../../assets/logo-green-2x.png';
import Grid from '../grid-test/Grid';
import ColOneOfTwo from '../grid-test/col-1-of-2/ColOneOfTwo';

function Footer ({navigationList, name})
{
  return (
    <div className="footer">
      <div className="footer__logo-box">
        <img src={LogoGreen} alt="Logo" className="footer__logo" />
      </div>
      <Grid>
        <ColOneOfTwo>
          <div className="footer__navigation">
            <ul className="footer__list">
              {navigationList.map((el, index) => (
                <li className="footer__item" key={index}>
                  <a href="" className="footer__link">
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ColOneOfTwo>
        <ColOneOfTwo>
          <p className="footer__copyright">
            Lorem ipsum dolor{' '}
            <a href="" className="footer__link">
              {name}
            </a>
            sit amet consectetur ,
            <a href="" className="footer__link">
              adipisicing elit
            </a>
            . Copyright &copy; by {name}. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus voluptate non libero, atque accusamus
            autem pariatur dolore! Assumenda cumque distinctio optio.
          </p>
        </ColOneOfTwo>
      </Grid>
    </div>
  );
}

export default Footer;
