import React, { useState } from 'react';
import { Crown, Eye, Filter, ExternalLink, PlusCircle, Sparkles, Image as ImageIcon } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import { GALLERY_ITEMS, COMPANY_INFO } from '../data/siteData';

export default function Gallery({ onSelectImage }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [customPhotos, setCustomPhotos] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPhoto, setNewPhoto] = useState({
    title: '',
    category: 'Wedding Catering',
    location: 'Pala, Kottayam',
    image: '',
    description: ''
  });

  const categories = ["All", "Wedding Catering", "Kerala Sadhya", "Signature Food", "Fleet & Transport", "Event Management", "Live Counters"];

  const combinedItems = [...customPhotos, ...GALLERY_ITEMS];

  const filteredItems = activeFilter === "All"
    ? combinedItems
    : combinedItems.filter(item => item.category === activeFilter);

  const handleAddCustomPhoto = (e) => {
    e.preventDefault();
    if (!newPhoto.image || !newPhoto.title) return;

    const created = {
      id: `custom-${Date.now()}`,
      ...newPhoto,
      instagramPostUrl: COMPANY_INFO.instagramUrl
    };

    setCustomPhotos([created, ...customPhotos]);
    setNewPhoto({
      title: '',
      category: 'Wedding Catering',
      location: 'Pala, Kottayam',
      image: '',
      description: ''
    });
    setShowAddModal(false);
  };

  return (
    <section id="gallery" className="py-28 bg-[#070A09] text-[#FDFBF7] relative overflow-hidden border-b border-[#C5A869]/20">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-royal-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C5A869]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1412] border border-[#C5A869]/40 text-[#E8D5A3] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4 shadow-sm">
            <Instagram className="w-3.5 h-3.5 text-[#C5A869]" />
            <span>@royalprincecatering Moments</span>
          </div>
          
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FDFBF7] mb-4">
            Our Work &amp; Event Gallery
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C5A869] mx-auto mb-6" />
          
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl italic text-[#CBD5D0] max-w-2xl mx-auto font-normal">
            Glimpses of actual catering feasts, authentic Kerala sadhyas, vehicle dispatch, and bespoke event arrangements delivered across Kottayam, Pala, and Central Kerala.
          </p>

          {/* Gallery Category Filter & Owner Add Photo Button */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-[#DFCA96] to-[#C5A869] text-[#070A09] font-bold shadow-[0_0_15px_rgba(197,168,105,0.3)] scale-105'
                    : 'bg-[#0D1412] text-[#CBD5D0] hover:text-[#C5A869] border border-[#C5A869]/20'
                }`}
              >
                {cat}
              </button>
            ))}

            {/* Quick Owner Add Photo Button */}
            <button
              onClick={() => setShowAddModal(true)}
              className="px-3.5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#050807] text-[#E8D5A3] hover:bg-[#C5A869] hover:text-[#070A09] border border-[#C5A869]/50 transition-colors flex items-center gap-1.5 cursor-pointer ml-1"
              title="Add or preview a new event photo"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Add / Preview Photo</span>
            </button>
          </div>
        </div>

        {/* Gallery Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-xl overflow-hidden border border-[#C5A869]/25 hover:border-[#C5A869] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.95)] transition-all duration-500 cursor-pointer ${
                index % 5 === 0 ? 'sm:col-span-2 sm:row-span-2 h-[460px]' : 'h-72'
              }`}
              onClick={() => onSelectImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A09] via-[#070A09]/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

              {/* Top Tags */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-[#070A09]/90 border border-[#C5A869]/40 text-[#E8D5A3] text-[10px] font-bold tracking-wider uppercase backdrop-blur-xs">
                  {item.category}
                </span>

                <span className="w-8 h-8 rounded-full bg-[#0D1412]/80 border border-[#C5A869]/50 flex items-center justify-center text-[#C5A869] group-hover:scale-110 transition-transform shadow-md">
                  <Eye className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Bottom Information on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[11px] text-[#C5A869] uppercase tracking-wider font-semibold mb-0.5">
                  {item.location}
                </p>
                <h3 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#FDFBF7] group-hover:text-[#E8D5A3] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8A9C94] line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>

                <div className="mt-2.5 pt-2 border-t border-[#C5A869]/20 flex items-center justify-between text-[11px] text-[#CBD5D0]">
                  <span className="text-[#E8D5A3] font-medium flex items-center gap-1">
                    Click to Enlarge
                  </span>
                  <a
                    href={item.instagramPostUrl || COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-[#C5A869] flex items-center gap-1"
                  >
                    <Instagram className="w-3 h-3" />
                    <span>View on IG</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Official Instagram Profile Follow Banner */}
        <div className="mt-16 text-center bg-[#0D1412] border border-[#C5A869]/30 rounded-xl p-8 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-0.5 shrink-0 shadow-lg">
              <div className="w-full h-full bg-[#070A09] rounded-full flex items-center justify-center">
                <Instagram className="w-7 h-7 text-[#FDFBF7]" />
              </div>
            </div>
            <div>
              <h4 className="font-['Cinzel'] text-lg font-bold text-[#FDFBF7]">
                Follow @royalprincecatering
              </h4>
              <p className="text-xs text-[#8A9C94] mt-0.5">
                Explore our daily stories, live cooking behind-the-scenes, fleet logistics, and recent wedding setups in Pala.
              </p>
            </div>
          </div>

          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-gradient-to-r from-[#DFCA96] to-[#C5A869] hover:from-[#FFF1CD] hover:to-[#DFCA96] text-[#070A09] text-xs font-bold uppercase tracking-wider rounded shadow hover:scale-105 transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Us on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>

      {/* Owner Add / Preview Photo Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#0D1412] border-2 border-[#C5A869] rounded-xl max-w-md w-full p-6 text-[#FDFBF7] shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-[#C5A869]/20 mb-4">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[#C5A869]" />
                <h3 className="font-['Cinzel'] font-bold text-base text-[#FDFBF7]">Add / Preview Event Photo</h3>
              </div>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-[#CBD5D0] hover:text-white text-lg font-bold p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#8A9C94] mb-4 leading-relaxed">
              Business owners can quickly preview new event photographs, vehicle fleet images, or Instagram URLs in the gallery layout before uploading to the server.
            </p>

            <form onSubmit={handleAddCustomPhoto} className="space-y-3">
              <div>
                <label className="text-xs uppercase font-semibold text-[#C5A869] block mb-1">Photo Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Grand Church Wedding Banquet"
                  value={newPhoto.title}
                  onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded bg-[#070A09] border border-[#C5A869]/40 text-white focus:outline-none focus:border-[#C5A869]"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-semibold text-[#C5A869] block mb-1">Category</label>
                <select
                  value={newPhoto.category}
                  onChange={(e) => setNewPhoto({ ...newPhoto, category: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded bg-[#070A09] border border-[#C5A869]/40 text-white focus:outline-none focus:border-[#C5A869]"
                >
                  <option value="Wedding Catering">Wedding Catering</option>
                  <option value="Kerala Sadhya">Kerala Sadhya</option>
                  <option value="Signature Food">Signature Food</option>
                  <option value="Fleet & Transport">Fleet &amp; Transport</option>
                  <option value="Event Management">Event Management</option>
                  <option value="Live Counters">Live Counters</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase font-semibold text-[#C5A869] block mb-1">Image URL</label>
                <input
                  type="url"
                  required
                  placeholder="https://example.com/photo.jpg or Instagram CDN URL"
                  value={newPhoto.image}
                  onChange={(e) => setNewPhoto({ ...newPhoto, image: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded bg-[#070A09] border border-[#C5A869]/40 text-white focus:outline-none focus:border-[#C5A869]"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-semibold text-[#C5A869] block mb-1">Location</label>
                <input
                  type="text"
                  placeholder="e.g., Pala, Kottayam"
                  value={newPhoto.location}
                  onChange={(e) => setNewPhoto({ ...newPhoto, location: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded bg-[#070A09] border border-[#C5A869]/40 text-white focus:outline-none focus:border-[#C5A869]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs uppercase text-[#CBD5D0] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-[#DFCA96] to-[#C5A869] text-[#070A09] text-xs font-bold uppercase rounded hover:brightness-105 transition-all"
                >
                  Add to Gallery
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
