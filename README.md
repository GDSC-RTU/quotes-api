## Inspirational Quotes API

This API is designed to return quotes to the user. 

## Endpoints 

 - / => Will return all the quotes listed in the quotes.json file.
 - /<id> => id is a variable which returns a quote having that id.

## Run the application

* Make sure you have NodeJS installed. Check it by typing this command in your terminal - 

```
node --version
```

* Fork this repository.

* Clone this repository by running the following command in your terminal - 

```
git clone https://github.com/GDSC-RTU/quotes-api
```

* cd into the folder by using the following command - 
```
cd quotes-api
```

* Install the dependencies by running the following command - 
```
npm install
```

* To run the application, type the following command in your terminal - 
```
npm run start
```

* Access the results produced by accessing the following URL in your browser - 
```
localhost:8080
```

## Contribution Guidelines

Check [contribution.md](Contributing.md) if you want to learn how to make a contribution. 

Append your quote to quote.json inside the quote/ folder and raise the PR.

```
{  
    "quote":"Your new Quote",
    "author":"Author of your quote",
    "id": "+1 the previous id"
}
```

### Note : 

 - Please avoid the repetition of quotes.
 - Do not make any changes in other files.
 - **Do not repeat the id's**