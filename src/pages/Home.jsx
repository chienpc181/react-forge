import {React, useEffect, useState} from 'react';
import Viewer from './Viewer/Viewer';
import LeftBarButtons from './components/LeftBarButtons';
import logo from '../Visual Sense Group.png';
import bimlabLogo from '../BIMLab.png';
import MainBoard from './components/MainBoard';
import BuildingInfo from './components/BuildingInfo';
import { useParams } from 'react-router-dom';

function Home() {
  const params = useParams();
  const [docId, setDocId] = useState('');

  // const docId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cDNoY3o4N3JrYWNnenBhcmNncGczYWN4d2M0Z213anotZGVzaWduYXV0b21hdGlvbi9yc3RfYmFzaWNfc2FtcGxlX3Byb2plY3QucnZ0';
  // const docId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cDNoY3o4N3JrYWNnenBhcmNncGczYWN4d2M0Z213anotcGNjX2R4Zi9DTFUtQVVEMS1BUkMtQXVkaXRvcml1bS1QMi0yMzA2MTcucnZ0';
  // const docId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZGFjZXMtbW9kZWxzL0tZQTFfREFDRVNfT01fTU9ERUxfUjI0LnJ2dA';



  

  useEffect(() => {
    const models = [
      {
        name: "test",
        docId: 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cDNoY3o4N3JrYWNnenBhcmNncGczYWN4d2M0Z213anotZGVzaWduYXV0b21hdGlvbi9yc3RfYmFzaWNfc2FtcGxlX3Byb2plY3QucnZ0',
      },
      {
        name: "test-1",
        docId: 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cDNoY3o4N3JrYWNnenBhcmNncGczYWN4d2M0Z213anotcGNjX2R4Zi9DTFUtQVVEMS1BUkMtQXVkaXRvcml1bS1QMi0yMzA2MTcucnZ0',
      },
      {
        name: "khoa-y",
        docId: 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZGFjZXMtbW9kZWxzL0tZQTFfREFDRVNfT01fTU9ERUxfUjI0LnJ2dA',
      },
      {
        name: "dai-hoc-kinh-te-luat",
        docId: 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZGFjZXMtbW9kZWxzL1RyJUM2JUIwJUUxJUJCJTlEbmclMjBESCUyMEtpbmglMjBUJUUxJUJBJUJGJTIwTHUlRTElQkElQUR0LnJ2dA',
      },
      {
        name: "ktx-khu-b-toa-b2",
        docId: 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZGFjZXMtbW9kZWxzL0tUWCUyMEtIVSUyMEJfVE9BJTIwQjJfLnJ2dA',
      },
      {
        name: "ptnk",
        docId: 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZGFjZXMtbW9kZWxzL1RyJUM2JUIwJUUxJUJCJTlEbmclMjBQVE5LLnJ2dA',
      },
    ];
    const model = models.find((model) => model.name === params.name);
    if (model) {
      
      setDocId(model.docId);
    }
  }, [params.name]);

  if (!docId) {
    return null;
  }

 
  return (
    <div className='row containter'>
      <div className='col-9 d-flex'>
        <div className='left-bar'>
            <div className='logo-main'>
                <img src={logo} alt="Daces"/>
            </div>
            <LeftBarButtons></LeftBarButtons>
        </div>
        <div className='viewer-container'>
            <div className='viewer-header'>
              <div >
                  <img src={bimlabLogo} alt="sss"/>
              </div>
            </div>
            <div className='viewer'>
                <Viewer docId={docId}></Viewer>
            </div>
            {/* <BuildingInfo></BuildingInfo> */}
            <div className='viewer-footer'>
                <p>Visual Sense Group</p>
            </div>
        </div>
      </div>
      <div className='col-3'>
        <MainBoard></MainBoard>
      </div>
    </div>
  );
}

export default Home;
