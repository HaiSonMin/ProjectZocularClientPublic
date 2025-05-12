import React, {useEffect, useRef, useState} from "react";
import {useLoadScript} from "@react-google-maps/api";
import useDebounce from "@/hooks/useDebounce";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Check, ChevronsUpDown} from "lucide-react";
import {cn} from "@/lib/utils";

const libraries: "places"[] = ["places"];

interface PlacesAutocompleteProps {
	onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
}

const PlacesAutocomplete: React.FC<PlacesAutocompleteProps> = ({
	                                                               onPlaceSelected,
                                                               }) => {
	const {isLoaded} = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
		libraries,
	});
	
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	const [suggestions, setSuggestions] = useState<
		google.maps.places.AutocompletePrediction[]
	>([]);
	const autocompleteServiceRef =
		useRef<google.maps.places.AutocompleteService | null>(null);
	
	useEffect(() => {
		if (!isLoaded) return;
		autocompleteServiceRef.current =
			new window.google.maps.places.AutocompleteService();
	}, [isLoaded]);
	
	const debouncedValue = useDebounce(value, 500);
	
	useEffect(() => {
		if (debouncedValue) {
			if (!autocompleteServiceRef.current || !debouncedValue) return;
			
			autocompleteServiceRef.current.getPlacePredictions(
				{input: debouncedValue},
				(predictions) => {
					setSuggestions(predictions || []);
				}
			);
		}
	}, [debouncedValue]);
	
	const handlePlaceSelect = async (placeId: string, description: string) => {
		setValue(description);
		setOpen(false);
		const geocoder = new window.google.maps.Geocoder();
		geocoder.geocode({placeId}, (results, status) => {
			if (status === "OK" && results?.[0]) {
				onPlaceSelected(results[0]);
			}
		});
	};
	
	if (!isLoaded) return <div>Loading...</div>;
	
	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-full justify-between"
				>
					{value || "Enter location..."}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full p-0">
				<Command>
					<CommandInput
						placeholder="Search location..."
						value={value}
						onValueChange={setValue}
					/>
					<CommandEmpty>No location found.</CommandEmpty>
					<CommandGroup>
						{suggestions.map((place) => (
							<CommandItem
								key={place.place_id}
								value={place.description}
								onSelect={() =>
									handlePlaceSelect(place.place_id, place.description)
								}
							>
								<Check
									className={cn(
										"mr-2 h-4 w-4",
										value === place.description ? "opacity-100" : "opacity-0"
									)}
								/>
								{place.description}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export default PlacesAutocomplete;
