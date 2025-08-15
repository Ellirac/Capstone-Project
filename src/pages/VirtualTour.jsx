import React, { useEffect, useRef } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { resorts } from '../data/resorts';
import './VirtualTour.css';

let PANOLENS = null;
try { PANOLENS = require('panolens'); } catch (e) { PANOLENS = null; }

export default function VirtualTour(){
  const { resortId } = useParams();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'panorama';
  const resort = resorts.find(r => r.id === resortId);
  const viewerRef = useRef(null);

  useEffect(()=> {
    if (!resort) return;
    if (mode === 'panorama' && PANOLENS && viewerRef.current) {
      const p = new PANOLENS.ImagePanorama(resort.virtualTour);
      const v = new PANOLENS.Viewer({ container: viewerRef.current });
      v.add(p);
      return () => v.dispose();
    }
  }, [resort, mode]);

  if (!resort) return <div className="container section">Resort not found</div>;

  return (
    <div className="container">
      <h1>{resort.name} — {mode === 'video' ? 'Walkthrough' : '360° Tour'}</h1>
      <p className="muted">Use mouse or touch to navigate.</p>

      {mode === 'video' ? (
        resort.walkthrough ? (
          <div className="virtual-fallback card">
            <video controls className="walk-video">
              <source src={resort.walkthrough} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : <div className="card">No walkthrough video available.</div>
      ) : (
        PANOLENS ? (
          <div ref={viewerRef} className="virtual-canvas" />
        ) : (
          <div className="virtual-fallback card">
            <img src={resort.virtualTour} alt={`${resort.name} 360`} />
            <div className="fallback-caption">Interactive viewer unavailable. Install panolens to enable panorama viewer.</div>
          </div>
        )
      )}
    </div>
  );
}
