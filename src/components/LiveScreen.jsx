import React, { useEffect, useState } from 'react';
import HLSPlayer from '../components/HLSPlayer';
import useWebSocket from '../hooks/useWebSocket';
import logo from '../assets/images/stream_logo.png'

const LiveScreen = () => {
    const { requestStreamKey, wsIsLive, wsStreamKey } = useWebSocket('');

    useEffect(() => {
        requestStreamKey();
    }, [requestStreamKey]);

    return (
        <div>
            {wsStreamKey != '' ? (
                <HLSPlayer
                    src ={`https://${process.env.REACT_APP_MEDIA_SERVER_ADDRESS}/hls/${wsStreamKey}.m3u8`}
                />
            ) : (
                <img src={logo} alt="logo"
                    style={{ width: '730px' }} />
            )}

        </div>
    );
};

export default LiveScreen;
