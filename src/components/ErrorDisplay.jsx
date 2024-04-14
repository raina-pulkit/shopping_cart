

export default function ErrorDisplay({msg}){
	return (
		<div className="font-extrabold text-6xl flex-1 text-center flex flex-col justify-center">Error: <span className="font-semibold">{msg}</span></div>
	);
}