import HitMarker from '../../assets/sound/hitmarker.mp3';

export default function AudioHitMarker() {
    const audio = new Audio(HitMarker);
    audio.play();
}
