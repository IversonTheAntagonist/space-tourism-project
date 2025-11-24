<div className="w-full mx-auto md:w-[90%] lg:w-[80%] relative -mt-16 z-10 mb-12">
  {/* Filter Section */}
  <div className="bg-gray-900 p-5 md:px-8 grid grid-cols-2 md:grid-cols-7 gap-2 border-b border-slate-500 items-end">
    <div className="md:col-span-2">
      <label className="text-white w-full block barlow-condensed text-xs md:text-sm uppercase font-bold mb-2">
        Keywords
      </label>
      <input
        type="text"
        className="w-full barlow-condensed appearance-none border rounded-sm py-2 px-3 text-white leading-tight bg-transparent border-gray-300"
        placeholder="eg Falcon"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
    </div>
  </div>
</div>
